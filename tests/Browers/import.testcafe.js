import { Selector } from 'testcafe';

fixture `import`
    .page `http://localhost:8080/`;

test('Upload & Validate import', async t => {
    await t
        .maximizeWindow()
        .setFilesToUpload('[name="file_upload"]', ['_uploads_/Various DINs.xlsx'])
        .expect(Selector('div[id="result"]').withText('Download here ----->').exists).ok();
});
