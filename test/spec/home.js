describe('Home', () => {
    // Test Case 1:
    // Open URL home page: https://practice.sdetunicorns.com/
    // Make sure <title> match: Practice E-Commerce Site – SDET Unicorns
    it('Open URL & assert title', async () => {
        // Open URL
        await browser.url('https://practice.sdetunicorns.com/')

        //Assert title
        await expect (browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns')
    });

    // Test Case 2: 
    // Click on About tab
    // Make sure URL opened is https://practice.sdetunicorns.com/about
    it('Open About Page & assert URL', async () => {
        //Click on About tab
        await $('#menu-item-491').click ()

        //Asser URL 
        await expect (browser).toHaveUrl('https://practice.sdetunicorns.com/about/')
    });

    // Test Case 3: ****** Find Element & Click ****** 
    // Click on logo button  
    // Validate / Assert URL doesn't contain 'about' text
    it ('Click on Logo button & assert URL', async () => {
        
        // Validate cssSelector is on page
        // await $('.custom-logo-link').toBeClickable ()
        const elem = await $('.custom-logo-link')
        await expect(elem).toBeClickable()
        // await expect ('.custom-logo-link').toBePresent ()

        // Click on Logo button
        await $('.custom-logo-link').click ()

        // Assert URL is home page
        await expect (browser).toHaveUrl('https://practice.sdetunicorns.com/')
    });

    // Test Case 4: ****** Find Element & Get Text ****** 
    // Find Heading element & Assert the text
    // Validate 
    it('', async () => {
        // Finding Heading element on Page
        const headingElement = await $('.elementor-widget-container h1')

        // Get the test
        const headingTest = await headingElement.getText ()

        // Assert the text is expected
        await expect(headingTest).toEqual('Think different. Make different.')
        //await expect(headingElement).toHaveText('Think different. Make different.')
        await browser.pause (5000)
    });

   // Test Case:  ****** Multiple Items ($$)
   
    
});