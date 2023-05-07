import { Phone } from './Phone.js'

export function main() {
    const phone = new Phone()

    // Using power button to turn on then lock
    phone.onPhoneLock()
    phone.onPhoneLock()

    // Using home button to turn on, unlock, go to home, then lock
    phone.onHome()
    phone.onHome()
    phone.onHome()
    phone.onPhoneLock()
}
