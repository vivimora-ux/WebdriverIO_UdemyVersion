
import {join} from 'node:path'

describe('Upload Tests', () => {
    // Test Case 1:
    // 

    it('Upload on a hidden input field', async () => {
        // Open URL
        await browser.url('/cart/')
        console.log('VIVI')

        // Store test file path
        const filePath = join(projectRoot, 'data/','smile.jpeg');

        // Upload test file
        const remoteFilePath = await browser.uploadFile(filePath)

        // Remove hidden class
        await browser.execute("document.querySelector('#upfile_1').className = ''") 
            // <<- IMPORTANT - to remember, to remove classes! ->> //

        // Set file path value in the input field
        await $('#upfile_1').setValue(remoteFilePath)
        await $('#upload_1').click() // Click submit button 

        // Assertion 
        await expect($('#wfu_messageblock_header_1_1')).toHaveText('uploaded successfully')
    });
}); 