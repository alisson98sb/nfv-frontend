import { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { toast } from 'sonner';
import { api } from './axios';
import { useAuthStore } from '@/stores/authStore';
import type { ErrorResponse } from '@/types/common.types';

/**
 * Interceptor de requisições
 * Adiciona o token de autenticação no header
 */
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = useAuthStore.getState().token;

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Interceptor de respostas
 * Trata erros globalmente
 */
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ErrorResponse>) => {
    // Erro de rede
    if (!error.response) {
      toast.error('Erro de conexão', {
        description: 'Não foi possível conectar ao servidor. Verifique sua conexão.',
      });
      return Promise.reject(error);
    }

    const { status, data } = error.response;

    switch (status) {
      case 401: {
        // Token inválido ou expirado
        toast.error('Sessão expirada', {
          description: 'Por favor, faça login novamente.',
        });
        useAuthStore.getState().clearAuth();
        window.location.href = '/login';
        break;
      }

      case 403: {
        // Sem permissão
        toast.error('Acesso negado', {
          description: 'Você não tem permissão para realizar esta ação.',
        });
        break;
      }

      case 404: {
        // Recurso não encontrado
        toast.error('Não encontrado', {
          description: data?.message || 'O recurso solicitado não foi encontrado.',
        });
        break;
      }

      case 409: {
        // Conflito (ex: email duplicado)
        toast.error('Conflito', {
          description: data?.message || 'Já existe um registro com estes dados.',
        });
        break;
      }

      case 422:
      case 400: {
        // Erro de validação
        if (data?.errors && data.errors.length > 0) {
          // Exibir erros de campo
          const errorMessages = data.errors.map((err) => `${err.field}: ${err.message}`).join('\n');
          toast.error('Erro de validação', {
            description: errorMessages,
          });
        } else {
          toast.error('Erro de validação', {
            description: data?.message || 'Dados inválidos. Verifique os campos e tente novamente.',
          });
        }
        break;
      }

      case 500:
      case 502:
      case 503: {
        // Erro do servidor
        toast.error('Erro no servidor', {
          description: 'Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.',
        });
        break;
      }

      default: {
        // Outros erros
        toast.error('Erro', {
          description: data?.message || 'Ocorreu um erro inesperado.',
        });
      }
    }

    return Promise.reject(error);
  }
);
