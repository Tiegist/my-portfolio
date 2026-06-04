import { profile } from '@/data/portfolio'

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

function isSuccessResponse(value: unknown): boolean {
  if (typeof value === 'boolean') return value
  if (typeof value === 'string') return value.toLowerCase() === 'true'
  return false
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const formData = new FormData()
  formData.append('name', data.name)
  formData.append('email', data.email)
  formData.append('subject', data.subject)
  formData.append('message', data.message)
  formData.append('_subject', `TGirma.dev — ${data.subject}`)
  formData.append('_replyto', data.email)
  formData.append('_template', 'table')

  const controller = new AbortController()
  const timeoutId = window.setTimeout(() => controller.abort(), 20000)

  let response: Response

  try {
    response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(profile.email)}`,
      {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
        signal: controller.signal,
      },
    )
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new Error('Request timed out. Please try again or email me directly.')
    }
    throw new Error('Unable to reach the email service. Please try again later.')
  } finally {
    window.clearTimeout(timeoutId)
  }

  let result: { success?: boolean | string; message?: string } = {}

  try {
    result = await response.json()
  } catch {
    throw new Error('Unable to reach the email service. Please try again later.')
  }

  if (!response.ok || !isSuccessResponse(result.success)) {
    throw new Error(result.message ?? 'Failed to send your message. Please try again.')
  }
}
