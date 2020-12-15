<template>
  <div class="counter">
    <el-form
      :ref="name"
      :model="form"
      :rules="ruleForm"
      label-width="100px"
      label-position="left"
    >
      <el-form-item
        :label="item.label"
        required
        v-for="(item, key) in source"
        :key="key"
      >
        <el-col :span="22">
          <el-form-item :prop="item.name">
            <el-input
              v-model.number="form[item.name]"
              :placeholder="item.placeholder"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="2">{{ item.unit }}</el-col>
      </el-form-item>
    </el-form>
    <el-row :gutter="10">
      <el-col :span="16">
        <el-button type="primary" @click="computed">计算</el-button>
      </el-col>
      <el-col :span="8">
        <el-button type="info" @click="empty">清空</el-button>
      </el-col>
    </el-row>
    <el-row v-if="visible">
      <h3>计算结果</h3>
      <el-col :span="6">{{ result.label }}</el-col>
      <el-col :span="16" style="text-align:right">
        {{ counterResult | numFilter }}
      </el-col>
      <el-col :span="2">{{ result.unit }}</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    name: String,
    form: {
      type: Object,
      default: () => {
        return {}
      }
    },
    ruleForm: Object,
    source: Array,
    expression: String,
    result: Object
  },
  data() {
    return {
      visible: false,
      counterResult: 0
    }
  },
  filters: {
    numFilter(value) {
      return parseFloat(value).toFixed(2)
    }
  },
  methods: {
    computed() {
      this.$refs[this.name].validate(valid => {
        if (valid) {
          this.visible = true
          this.counterResult = eval('(' + this.expression + ')')(this.form)
        } else {
          alert('请按要求修改')
          return false
        }
      })
    },
    empty() {
      this.visible = false
      for (let key in this.form) {
        this.form[key] = ''
      }
    }
  }
}
</script>
<style>
.el-button {
  display: block;
  width: 100%;
}
.el-input input {
  text-align: right;
}
</style>
