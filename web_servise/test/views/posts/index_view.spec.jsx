import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'

// import sinon from 'sinon'
// import superagent from 'superagent';


// import { spyOnComponentMethod, stubComponentMethod } from 'sinon-spy-react'

// import TestUtils from 'react-addons-test-utils';
import IndexPost from 'posts/index'

import { UIStore } from 'stores'


import Superagent from 'superagent'
import Nock from 'nock'


describe("<IndexPost />", function() {

  let wrapper
  function mockReactRouter() { function isActive() {} }
  let request

  // beforeEach(function () {
  //  request = sinon.stub(superagent, 'get')

  //   this.xhr = sinon.useFakeXMLHttpRequest()
  //   this.requests = []
  //   this.xhr.onCreate = function(xhr) { this.requests.push(xhr) }.bind(this)

  //   wrapper = render(<IndexPost />, { router: mockReactRouter() })
  // })


  it("contains spec with links", function() {

    var nockScope = Nock("http://localhost:80").get('/api/movies').reply(200, { "333" : 'OK'})

    // console.log(nockScope.isDone())

    // Superagent
    //   .get('http://localhost:4000/signin')
    //   .set('X-API-Key', 'foobar')
    //   .set('Accept', 'application/json')
    //   .end( function(err, res) {
    //     console.log(res.body)
    //     // console.log(err)
    //   })


  // expect(nockScope.isDone()).to.be.ok()


   // request = sinon.stub(superagent, 'get')


   // request.returns({
   //   // "333": "33333"
   //    end: (cb) => {
   //      cb(null, {ok: true, body: { "status" : "OK" }})
   //    }
   //  });

   //  console.log(request)


    wrapper = mount(<IndexPost />, { router: mockReactRouter() })


    // console.log(this.requests)

    // var missionImpossible = {
    //     start: function (agent) {
    //         agent.apply(this);
    //     }
    // };

    // // By using a sinon.spy(), it allows us to track how the function is used
    // var ethanHunt = sinon.spy();
    // missionImpossible.start(ethanHunt)


    // this.requests[0].respond(200, { "Content-Type": "application/json" }, JSON.stringify({
    //   message: 'OK',
    //   auth_token: {
    //     token: 'BIG_FAT_HASHED_TOKEN'
    //   }
    // }))
  //   var data = JSON.stringify({ foo: 'wwwwbar' })

  //   myapi.get(function(err, result) {
  //     result.should.deep.equal(data)
  //   })
  //   //
  //   wrapper = mount(<IndexPost />, { router: mockReactRouter() })

  //   // console.log(this.requests)
  //   this.requests[0].respond(200, { 'Content-Type': 'text/json' }, data)

  })


})

