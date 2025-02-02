import { z } from 'zod';

export const reviewsValidation = z.object({
  nameUa: z
    .string({ required_error: 'Поле повинно бути заповнене' })
    .min(2, 'Ім’я має містити мінімум 2 символи')
    .max(25, 'Ім’я має містити максимум 25 символів')
    .refine((value) => /^[а-яА-ЯҐґЄєІіЇї\s\d'’-]+$/.test(value), {
      message: 'Введіть коректне ім’я українською мовою'
    }),

  nameEn: z
    .string({ required_error: 'Поле повинно бути заповнене' })
    .min(2, 'Ім’я має містити мінімум 2 символи')
    .max(25, 'Ім’я має містити максимум 25 символів')
    .refine((value) => /^[a-zA-Z\s\d'’-]+$/.test(value), {
      message: 'Введіть коректние ім’я англійською мовою'
    }),

  reviewUa: z
    .string({ required_error: 'Поле повинно бути заповнене' })
    .min(2, 'Відгук має містити мінімум 2 символи')
    .max(300, 'Відгук має містити максимум 300 символів'),

  reviewEn: z
    .string({ required_error: 'Поле повинно бути заповнене' })
    .min(2, 'Відгук має містити мінімум 2 символи')
    .max(300, 'Відгук має містити максимум 300 символів')
});
