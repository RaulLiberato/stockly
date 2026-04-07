import z from "zod";

export const deleteProductSchema = z.object({
  id: z.string().uuid({ message: "ID do produto inválido" }),
});

export type DeleteProductSchema = z.infer<typeof deleteProductSchema>;
