<template>
  <div id="sendSms">
    <h1>短信通知 <br />❤快告诉你的那个她(他)你们在一块多久了吧❤</h1>
    <Form ref="formCustom" :model="form" label-position="left" :label-width="200" :rules="ruleValidate">
      <FormItem label="Your Name" prop="name1">
        <Input v-model="form.name1" maxlength="10"></Input>
      </FormItem>
      <FormItem label="Her(His) Name" prop="name2">
        <Input v-model="form.name2" maxlength="10"></Input>
      </FormItem>
      <FormItem label="day" prop="day">
        <Input v-model="form.day" type="number"></Input>
      </FormItem>
      <FormItem label="phone" prop="phone">
        <Input v-model="form.phone" type="number"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formCustom')">Submit</Button>
        <Button @click="handleReset('formCustom')" style="margin-left: 8px">Reset</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import {PostMessage} from "@/components/NetWork/request";

export default {
  name: "sendSms",
  data() {
    const valiPhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('The phone cannot be empty'));
      } else {
        /* 验证邮箱是正确 */
        var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (reg.test(this.form.phone)) {
          callback();
        }else{
          callback(new Error('The format of phone number is wrong'));
        }
      }
    };
    return {
      form: {
        name1: '',
        name2: '',
        day: '',
        phone: ''
      },
      ruleValidate: {
        name1: [
          {required: true, message: 'Your Name cannot be empty', trigger: 'blur'}
        ],
        name2: [
          {required: true, message: 'Her(His) Name cannot be empty', trigger: 'blur'}
        ],
        day: [
          {required: true, message: 'The day cannot be empty', trigger: 'blur'}
        ],
        phone: [
          {required: true, validator: valiPhone, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          /* 发送短信 */
          PostMessage("/user/smsLove", {
            name1: this.form.name1,
            name2: this.form.name2,
            phone: this.form.phone,
            day: this.form.day,
          }).then(res => {
            res.data.code === 200? this.$Message.success('发送成功!') : this.$Message.error('发送失败!');
          })
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields();
    }
  }
}
</script>

<style scoped lang="scss">
#sendSms {
  margin: 10% auto 20px;
  width: 80%;
  h1 {
    text-align: center;
    margin-bottom: 40px;
  }
  .ivu-form {
    width: 40%;
    margin: auto;
  }
}
</style>
