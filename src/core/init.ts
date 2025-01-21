import { logSumConfig } from "../../config"
import colors from "colors"
import { z } from "zod"

colors.enable();

const configSchema = z.object({
  logFilesLocation: z.array(z.string()),
  outputLogLocation: z.string().nullable(),
  styles: z.object({
    isColorsDisabled: z.boolean(),
  })
})

export type ILogSumConfig = z.infer<typeof configSchema>

const parseConfig = (config: unknown): ILogSumConfig | null => {
  const result = configSchema.safeParse(config);

  if (result.success) {
    return result.data;
  } else {
    console.error("Configuration parsing failed:", formatZodErrors(result.error));
    return null;
  }
};

const formatZodErrors = (error: z.ZodError): string => {
  return error.errors
    .map((err) => {
      const path = err.path.join(" > ") || "root";
      return `Error at "${path}": ${err.message}`;
    })
    .join("\n");
};

export const configuration: ILogSumConfig | null = parseConfig(logSumConfig);

if (configuration?.styles.isColorsDisabled) {
  colors.disable();
  console.log("Colors are disabled! :(");
}