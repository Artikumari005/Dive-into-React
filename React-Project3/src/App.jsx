import { useState } from 'react'
import Jokes  from './Jokes'
import './App.css'

function App() {
 return(
  <>
  
  <Jokes
  setup="why did the chicken cross the road?"
  punchline="to get to the other side"
  />
  <Jokes
  setup="what do you call a fake noodle?"
  punchline="an impasta"
  />
  <Jokes
  setup="how does a penguin build its house?"
  punchline="Igloos it together"
  />
  <Jokes
  setup="what do you call a bear with no teeth?"
  punchline="a gummy bear"
  />
  <Jokes
  setup="why don't scientists trust atoms?"
  punchline="because they make up everything"
  />
  <Jokes
  setup="what do you call a fish wearing a bowtie?"
  punchline="sorfish"
  />
  
  </>
 )
}

export default App
