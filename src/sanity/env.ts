export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-29'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
 "sk3tQ3cxTvaGUygy7JZPHOo6SrXZnEZsQ7B1FaPbVDdUeIagqOHoxnkvW0Q3aoBMqw3LLGCcwCLUx8xV7m0OEtoW9E81qZyjfvCnikt3xFQGT8FHa6XNETvfTkb9HPM8JNIcVNkAshE1gpt8nEErY4qT2zyHtF2yDnkjG5jGJoMs1DGQawok",
  'Missing environment variable: SANITY_API_TOKEN'
)


function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
