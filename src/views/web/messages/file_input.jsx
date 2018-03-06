import React, {Component} from 'react'

export default class Web extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      value: '',
      styles: {
        parent: {
          position: 'relative'
        },
        file: {
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 0,
          width: '100%',
          zIndex: 1
        },
        text: {
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 0,
          width: '100%',
          zIndex: -1
        }
      }
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value.split(/(\\|\/)/g).pop()
    })

    if (this.props.onChange) {
      this.props.onChange(e)
    }
  }

  render() {
    return React.DOM.div({
        style: this.state.styles.parent
      },

      // Actual file input
      React.DOM.input({
        type: 'file',
        name: this.props.name,
        className: this.props.className,
        onChange: this.handleChange,
        disabled: this.props.disabled,
        accept: this.props.accept,
        style: this.state.styles.file,
        multiple: this.props.multiple
      }),

      // Emulated file input
      React.DOM.input({
        type: 'text',
        tabIndex: -1,
        name: this.props.name + '_filename',
        value: this.state.value,
        className: this.props.className,
        onChange: function() {
        },
        placeholder: this.props.placeholder,
        disabled: this.props.disabled,
        style: this.state.styles.text
      }))
  }
}
