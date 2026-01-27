import { useState } from 'react'
import Jokes  from './Jokes'
import './App.css'

function App() {
 return(
  <>
  
  <Jokes
  setup="why did the chicken cross the road?"
  punchline="to get to the other side"
  upvotes={2}
  isPun={true}
  comments={[
    {name:"" ,Comment:"", title:""},
     {name:"" ,Comment:"", title:""},
      {name:"" ,Comment:"", title:""}
  ]}
  />
  <Jokes
  setup="what do you call a fake noodle?"
  punchline="an impasta"
   isPun={true}
  />
  <Jokes
  setup="how does a penguin build its house?"
  punchline="Igloos it together"
   isPun={true}
  />
  <Jokes
  setup="what do you call a bear with no teeth?"
  punchline="a gummy bear"
   isPun={true}
   
  />
  <Jokes
  setup="why don't scientists trust atoms?"
  punchline="because they make up everything"
   isPun={true}
  />
  <Jokes
  setup="what do you call a fish wearing a bowtie?"
  punchline="sorfish"
   isPun={true}
  />
  
  </>
 )
}

export default App
