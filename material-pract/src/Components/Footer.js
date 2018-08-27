import React from 'react';
import { Paper, Tabs } from '@material-ui/core';
// import { Tab } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';


// Adding Footer


export default ({ muscles, category, onSelect }) => {

  // if we have a category
  // we will find the category in the the list of muscles
  // if the group equals the category, it will get the index.
  const index = category
  ? muscles.findIndex(group => group === category) + 1
  // increment the index + 1 
  // since exercises are based on 0-7 on store.js
  // the fault is zero
  : 0

  // Check to see if there is an actual index
  const onIndexSelect = (e, index) => 
  // if there is an index and
  // index equals to 0, 
  // pass the index into an empty string
    onSelect(index === 0 ? '' : muscles[index - 1])

  return <Paper>
  <Tabs
    value={index}
    // onchange={(
      // e, index => {
      // if the index eqauls to 0
      // pass the cateogry that comes from the muscles
      // by index - 1
    //   onSelect=(index === 0 ? '': muscles[index - 1])
    // })}
    onChange={onIndexSelect}
    indicatorColor="primary"
    textColor="primary"
    centered
  >
    <Tab label="All" />
    {muscles.map(group =>
      <Tab key={group} label={group} />
    )}
  </Tabs>
</Paper>
}

