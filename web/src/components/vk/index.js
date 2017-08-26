import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Layout from 'components/shared/layout'
import VkPersons from 'components/vk/persons'
import VkTags from 'components/vk/tags'
import VkGroups from 'components/vk/groups'

const Vk = () => (
  <div>
    <Layout exact path="/vk" component={Vk}/>
    <Route exact path='/vk/persons' render={() => <Redirect to='/vk/persons/1' />} />
    <Layout exact path="/vk/persons/:page" component={VkPersons}/>
    <Route exact path='/vk/groups' render={() => <Redirect to='/vk/groups/1' />} />
    <Layout exact path="/vk/groups/:page" component={VkGroups}/>
    <Layout exact path="/vk/tags" component={VkTags}/>
  </div>
)

export default Vk
