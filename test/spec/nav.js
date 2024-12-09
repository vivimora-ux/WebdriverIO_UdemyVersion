describe('Navegation Menu', () => {
    // Test Case 1:
    // Validate NAvigation Menu items. 

    it ('Get the name of all the navegation items & assert them', async () => {
        // Hardcoded timeout
        // browser.pause(1000)
        // waitForDisplayed() - To check if element is displayed on the screen
        // waitForClickable() - to check if the element can be clickable
        // waitForEnabled() - to check if the input field is enable
        // waitForExist() - to check if element is present in the DOM
        // waitUntil() - to check for a particular condition

        await browser.url('/')

        // Validation of "actualLinks" matching "expectedLinks"
        const expectedLinks = [
            "Home", 
            "About", 
            "Shop", 
            "Blog", 
            "Contact", 
            "My account",
        ]

        // Keeping text from li on html
        const actualLinks =[]

        // Getting elements and keeping them on navLinks const
            
        // Test case finding 1 element first and then the 2nd one
            // Individual element $
        //const navLinks = await $('#zak-primary-menu').$$('li[id*=menu]')
        
        // Test case findinf final element
        await $('#zak-primary-menu').waitForDisplayed()
            // Multiple elements $$
        const navLinks = await $$('#zak-primary-menu li[id*=menu]')

        for (const link of navLinks) {
            actualLinks.push(await link.getText())
        }

        // Match expectedLinks to actualLinks
        await expect(expectedLinks).toEqual(actualLinks)
    });
});