<template>
  <div>
    <a-form
    :form="form"
    @submit="handleSubmit"
    class="fu"
    >
        <a-form-item
        v-bind="formItemLayout"
        class="form"
        >
            <a-range-picker v-decorator="['range-picker', rangeConfig]" />
        </a-form-item>
        <a-form-item
            :wrapper-col="{
                xs: { span: 3, offset: 0 },
                sm: { span: 3, offset: 1.5 },
            }"
            class="form2"
            >
            <a-button
                type="primary"
                html-type="submit"
                class="btn"
            >
                筛选
            </a-button>
        </a-form-item>
    </a-form>
  </div>
</template>

<script type="text/javascript">
    import { Form, DatePicker, Button } from 'ant-design-vue'
    const { RangePicker } = DatePicker
    const { FormItem } = Form
    export default {
        name: 'WeekChoose',
        components: {
          AForm: Form,
          AformItem: Form,
          ARangePicker: RangePicker,
          AButton: Button
        },
        data () {
            return {
            formItemLayout: {
                labelCol: {
                xs: { span: 6 },
                sm: { span: 2 },
                },
                wrapperCol: {
                xs: { span: 6 },
                sm: { span: 4 },
                },
            },
            config: {
                rules: [{ type: 'object', required: true, message: '请选择时间' }],
            },
            rangeConfig: {
                rules: [{ type: 'array', required: true, message: '请选择时间' }],
            },
            }
        },
        beforeCreate () {
            this.form = this.$form.createForm(this);
        },
        methods: {
            handleSubmit  (e) {
            e.preventDefault();
            this.form.validateFields((err, fieldsValue) => {
                if (err) {
                    return;
                }

                // Should format date value before submit.
                const rangeValue = fieldsValue['range-picker'];
                const rangeTimeValue = fieldsValue['range-time-picker'];
                const values = {
                ...fieldsValue,
                'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')]
                };
                console.log('收到表单内容: ', values);
            });
            },
        }
    }    
</script>

<style lang="stylus" scoped>
    .form
      width: 80%
      margin: 0 auto
    .form2
      text-align: center
</style>