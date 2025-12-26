import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

/**
 * Formata valor monetário para BRL
 */
export const formatCurrency = (value: number | string): string => {
  const numValue = typeof value === 'string' ? parseFloat(value) : value;

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(numValue);
};

/**
 * Formata número com separadores de milhares
 */
export const formatNumber = (value: number | string, decimals = 2): string => {
  const numValue = typeof value === 'string' ? parseFloat(value) : value;

  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(numValue);
};

/**
 * Formata data para formato brasileiro
 */
export const formatDate = (date: Date | string, formatStr = 'dd/MM/yyyy'): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, formatStr, { locale: ptBR });
};

/**
 * Formata data e hora
 */
export const formatDateTime = (date: Date | string): string => {
  return formatDate(date, 'dd/MM/yyyy HH:mm:ss');
};

/**
 * Formata CPF (123.456.789-01)
 */
export const formatCPF = (cpf: string): string => {
  const cleaned = cpf.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);

  if (match) {
    return `${match[1]}.${match[2]}.${match[3]}-${match[4]}`;
  }

  return cpf;
};

/**
 * Formata CNPJ (12.345.678/0001-90)
 */
export const formatCNPJ = (cnpj: string): string => {
  const cleaned = cnpj.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/);

  if (match) {
    return `${match[1]}.${match[2]}.${match[3]}/${match[4]}-${match[5]}`;
  }

  return cnpj;
};

/**
 * Formata CPF ou CNPJ automaticamente
 */
export const formatCPFCNPJ = (value: string): string => {
  const cleaned = value.replace(/\D/g, '');

  if (cleaned.length === 11) {
    return formatCPF(cleaned);
  }

  if (cleaned.length === 14) {
    return formatCNPJ(cleaned);
  }

  return value;
};

/**
 * Formata telefone ((11) 98765-4321)
 */
export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');

  if (cleaned.length === 11) {
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
  }

  if (cleaned.length === 10) {
    const match = cleaned.match(/^(\d{2})(\d{4})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
  }

  return phone;
};

/**
 * Formata CEP (12345-678)
 */
export const formatCEP = (cep: string): string => {
  const cleaned = cep.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{5})(\d{3})$/);

  if (match) {
    return `${match[1]}-${match[2]}`;
  }

  return cep;
};
