'use strict'
import React, { Component } from 'react'
import { API, BaseModel } from 'mobx-model';
import { Upload } from 'models'
import 'blueimp-file-upload'

import { Col, Clearfix, Button } from 'react-bootstrap'
import Notification from 'notification'
import Spinner from 'spinner'
import FileInput from 'react-file-input'

class Uploader extends Component {

  state = {
    loading: false,
    data: {},
    viewProgressBar: false,
    fileNames: [],
  }

  componentWillMount() {
    this.setState({ loading: true })

    Upload.getS3PostSignature().then(response => {
      if (response.ok) {
        this.setState({ data: response.body })
        this.setState({ loading: false })
        this.runUploader()
        return true
      } else {
        Notification.error("S3 Post Signature Not Found")
      }
    })

  }

  runUploader() {
    const { uploader, progress, files } = this.refs
    let data = this.state.data
    let self = this

    $(uploader).fileupload({
      url:             data.url,
      type:            'POST',
      autoUpload:       true,
      formData:         data.fields,
      paramName:        'file',
      dataType:         'XML',

      start: function (e) {
        self.setState({ viewProgressBar: true })
      },

      change: function (e, data) {
        $.each(data.files, function (index, file) {
          let fileNames = self.state.fileNames
          fileNames.push(file.name)
          self.setState({ fileNames })
        })
      },

      done: function (e, data) {
        let s3_key = $(data.jqXHR.responseXML).find("Key").text();
        self.setState({ viewProgressBar: false })
        Upload.create({ s3_key: s3_key }).then(response => {
          if (response.ok) {
            Notification.info("file upload")
            return true
          } else {
            Notification.error("Error file upload")
          }
        })
      },

      fail: function(e, data) {
        Notification.errors("file not upload")
      },

      progressall: function (e, data) {
        let progress = parseInt(data.loaded / data.total * 100, 10)
        $('#progress .progress-bar').css( 'width', progress + '%' )
      },
    })

  }

  renderLoading() {
    return (
      <div className="sidebar-spinner"> <Spinner /> </div>)
  }

  renderView() {
    return (
      <div>
        <span className="btn btn-success fileinput-button">
            <i className="glyphicon glyphicon-plus"></i>
            <span>Select files...</span>
            <input
              ref="uploader"
              type="file"
              name="files[]"
              multiple
            />
        </span>

        { this.state.viewProgressBar ? this.renderProgressBar() : null }

        <br />
        { this.state.fileNames.map((file, index) =>
          <div
           key={index}
          > {file } </div>
        )}
      </div>
    )
  }

  renderProgressBar() {
    return (
      <div id="progress" className="progress">
        <div className="progress-bar progress-bar-success"></div>
      </div>
    )
  }

  render() {
    return this.state.loading ? this.renderLoading() : this.renderView()
  }

}

export default Uploader

