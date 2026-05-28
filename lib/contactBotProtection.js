export function createBotProtectionState() {
  return {
    website: '',
    recaptchaToken: '',
  };
}

export function getBotProtectionPayload(botProtection) {
  return {
    website: botProtection.website,
    recaptchaToken: botProtection.recaptchaToken,
  };
}

export async function validateBotProtection(payload = {}) {
  const website = `${payload.website || ''}`.trim();
  const recaptchaToken = `${payload.recaptchaToken || ''}`.trim();
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (website) {
    return {
      isValid: false,
      message: 'Bot submission blocked.',
    };
  }

  if (!secretKey) {
    return {
      isValid: false,
      message: 'Captcha is not configured on the server.',
    };
  }

  if (!recaptchaToken) {
    return {
      isValid: false,
      message: 'Please complete the captcha.',
    };
  }

  try {
    const verificationResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: recaptchaToken,
      }),
    });

    const verificationResult = await verificationResponse.json();

    if (!verificationResult.success) {
      return {
        isValid: false,
        message: 'Captcha verification failed. Please try again.',
      };
    }

    return {
      isValid: true,
    };
  } catch (error) {
    return {
      isValid: false,
      message: 'Captcha verification could not be completed.',
    };
  }
}
