const Uppy  = require('@uppy/core');
const Dashboard = require('@uppy/dashboard');
const XHRUpload = require('@uppy/xhr-upload')
require('@uppy/core/dist/style.css')
require('@uppy/dashboard/dist/style.css')
const getRandomString = require('./utils/utils').getRandomString


function FilelibJs(targetElementId, options){

    //TODO: Update to production endpoint url
    const ENDPOINT = 'http://localhost:9000/upload/';
    const FILE_FIELD_NAME = 'filelib_file';

    try{

        // Ensure the provided value is a string identifying DOM object
        if (targetElementId){
            if (typeof targetElementId !== 'string'){
                throw Error('targetElementId must be a typeof string')

            }
        }
        // Verify the targetElementID exits in DOM
        if (!document.getElementById(targetElementId)){
            throw Error('DOM has no element with given ID:'+ targetElementId)
        }

        let _targetElementID = targetElementId || 'filelib';
        // Ensure options is an object if provided
        if (options && typeof options !== 'object') {
            throw Error('Options must be an object')
        }
        // Uppy expects `id` value to be unique for every Dashboard plugin
        // Ref LINK: https://uppy.io/docs/dashboard/#id-39-Dashboard-39
        const dashboardId = getRandomString(12)
        console.log('DashboardId', dashboardId)
        // Initialize uploader with given options
        let uppy  = Uppy();
        uppy.use(Dashboard, {
            id: dashboardId,
            inline: true,
            target: '#' + _targetElementID,
            allowMultipleUploads: true,
            // disables Powered By Uppy tagline from uploader interface
            proudlyDisplayPoweredByUppy: false
        })
        //TODO: ACCESS_TOKEN ACQUISITION
        uppy.use(XHRUpload, {
            method: "POST",
            headers: {
                'FILELIB_ACCESS_TOKEN': 'b76e6cdb-af89-47f5-b73f-0f376311eb7d-ZtTyxhwRYLxfSBJl63HuiGqVo1bcEd7fkmW6',
            },
            endpoint: ENDPOINT,
            formData: true,
            fieldName: FILE_FIELD_NAME,
            withCredentials: false
        })
        uppy.on('upload-success', (file, response) => {

            console.log(file.name, response)


        })
    } catch (Err){
        console.error(Err)
    }

}

module.exports = FilelibJs;