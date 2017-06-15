const phantom = require('phantom');


let test = async () => {
    const instance = await phantom.create();
    const page = await instance.createPage();

    await page.property('viewportSize', {width: 1024, height: 600});

    const status = await page.open('https://stackoverflow.com/');

    console.log(`Page opened with status [${status}].`);

    await page.render('stackoverflow.pdf');
    console.log(`File created at [./stackoverflow.pdf]`);

    await instance.exit();
}


export default test
