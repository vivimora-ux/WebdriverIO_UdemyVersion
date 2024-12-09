describe('Contact', () => {
    // Fill all the inputs fields, submit form & Assert the success message

    it ('Fill all the inputs fields, submit form & Assert the success message', async () => {
        await browser.url('/contact')
    
        // Scrolling to the form
        const contactForm = await $('#evf-form-277')
        await contactForm.scrollIntoView()
        await contactForm.scrollIntoView({ block: 'center', inline: 'center' })
        await browser.pause (5000)

        // Fill out input fields
        await $('.contact-name input').setValue('Panchita')
        await $('.contact-email input').setValue('Panchita@msn.com')
        await $('.contact-phone input').setValue('1231231234')
        await $('.contact-message textarea').setValue('Hello, I am able to insert some text. SMILE')
        await browser.pause (5000)
        
        // Submit info    
        const myButton = await $('.evf-submit-container button')
        await myButton.click()
        await browser.pause (1000)
        
        // Assert the success message
        const successAlert = await $('.everest-forms-notice--success')
        await browser.pause (5000)
        await expect (successAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly')
        
        //assert(text === 'Thanks for contacting us! We will be in touch with you shortly')

    });

});