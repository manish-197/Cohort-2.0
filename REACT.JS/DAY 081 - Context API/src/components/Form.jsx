import React from 'react'

const Form = (props) => {

  const [newTheme, setNewTheme] = React.useState('');

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()

        props.changeTheme(newTheme)

        newTheme('')
      }}>
        <input type="text" placeholder='enter the theme'
        value={newTheme}
        onChange={(e) => {
            setNewTheme(e.target.value)
        }}
        />
        <button>change theme</button>
      </form>
    </div>
  )
}

export default Form
