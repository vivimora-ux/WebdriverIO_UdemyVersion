describe('blog', () =>{
    it ('Get list of all recent posts & Assert text length of first li is > 10', async () => {
        await browser.url('/blog')

        // Get the recent post elements
        const recentPosts = await $$('#recent-posts-3 ul li')
        await browser.pause (5000)

        // Loop through the list and assert the text length is greater than 10
        for (const item of recentPosts) {
            const text = await item.getText()
            await expect(text.length).toBeGreaterThan(10)
        }

        // Assert the total length of the list is 4
        await expect(recentPosts).toHaveLength(5)
    });
}); 