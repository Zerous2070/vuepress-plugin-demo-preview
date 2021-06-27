import CodeMirror from 'codemirror'
import 'codemirror/mode/vue/vue'
import assign from '../utils/assign'
import { h } from 'vue';

const DEFAULT_OPTIONS = {
  lineNumbers: true,
  mode: 'text/x-vue',
  theme: 'material',
  tabSize: 4
}

export default {
  name: 'VueCodeMirror',

  props: ['modelValue', 'options'],

  render () {
    return h('div', null, [
      h('textarea', { ref: 'textarea' }, this.modelValue)
    ])
  },

  mounted () { 
    this.currentOptions = assign({}, DEFAULT_OPTIONS, this.options)
    this.editor = CodeMirror.fromTextArea(this.$refs.textarea, this.currentOptions)
    this.editor.on('change', this.handleChange)
  },

  watch: {
    modelValue (val) {
        console.log(val)
      val !== this.editor.getValue() && this.editor.setValue(val)
    }
  },

  methods: {
    handleChange () {
      /* istanbul ignore next */
      this.$emit('change', this.editor.getValue())
    }
  }
}
