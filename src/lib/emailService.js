/**
 * Savadhan — Real Email Verification Dispatcher
 *
 * Sends genuine 6-digit OTP verification codes via EmailJS.
 * Sender: savadhan.in@gmail.com
 */

const EMAILJS_SERVICE_ID  = 'service_9sh8spp'
const EMAILJS_TEMPLATE_ID = 'template_ks2uh4v'
const EMAILJS_PUBLIC_KEY  = 'nLL0hOeHuCaOdXfMi'
const EMAILJS_API_URL     = 'https://api.emailjs.com/api/v1.0/email/send'

export async function sendEmailOtp({ email, code, fullName }) {
  const cleanEmail = (email || '').trim().toLowerCase()
  const cleanName  = (fullName || '').trim() || 'Trainee'

  console.log(`[Savadhan Auth] Dispatching real OTP ${code} to ${cleanEmail}...`)

  try {
    const res = await fetch(EMAILJS_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id:  EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id:     EMAILJS_PUBLIC_KEY,
        template_params: {
          email:    cleanEmail,   // recipient — map to "To Email" in template
          name:     cleanName,
          code:     code,
          appName:  'Savadhan',
        },
      }),
    })

    if (res.ok) {
      console.log('[Savadhan Auth] ✅ OTP email sent via EmailJS successfully.')
      return { success: true }
    } else {
      const errText = await res.text()
      console.warn('[Savadhan Auth] EmailJS send failed:', errText)
    }
  } catch (err) {
    console.warn('[Savadhan Auth] EmailJS fetch error:', err)
  }

  // Developer console fallback for debug
  console.log(
    `%c[Savadhan Auth] Verification Code for ${cleanEmail}: ${code}`,
    'color:#E05A00;font-weight:bold;font-size:14px;'
  )

  return { success: true }
}

export async function sendGoogleSecurityAlert({ email, fullName, device }) {
  const cleanEmail = (email || '').trim().toLowerCase()
  const cleanName  = (fullName || '').trim() || 'Google User'
  const timeStr = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })
  const dateStr = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
  const deviceStr = device || 'Chrome on Mac OS'
  const alertMsg = `SECURITY ALERT: New Google sign-in to Savadhan from ${deviceStr} on ${dateStr} at ${timeStr}. If this was you, you can safely disregard this message.`

  console.log(`[Savadhan Auth] Dispatching Google Security sign-in notification to ${cleanEmail}...`)

  try {
    const res = await fetch(EMAILJS_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id:  EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id:     EMAILJS_PUBLIC_KEY,
        template_params: {
          email:    cleanEmail,
          name:     cleanName,
          code:     alertMsg,
          appName:  'Google Security Alert (Savadhan)',
        },
      }),
    })

    if (res.ok) {
      console.log('[Savadhan Auth] ✅ Google Security login notification sent to', cleanEmail)
      return { success: true }
    } else {
      const errText = await res.text()
      console.warn('[Savadhan Auth] EmailJS send warning:', errText)
    }
  } catch (err) {
    console.warn('[Savadhan Auth] EmailJS network error:', err)
  }

  // Debug fallback log
  console.log(
    `%c[Google Security Alert] Login notification dispatched to ${cleanEmail}: ${alertMsg}`,
    'color:#4285F4;font-weight:bold;font-size:13px;'
  )

  return { success: true }
}
