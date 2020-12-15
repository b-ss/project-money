<template>
  <div class="calculate">
    <el-tabs v-model="activeTab" type="card" class="tab">
      <el-tab-pane v-for="(tab, key) in tabs" :label="tab.label" :name="tab.name" :key="key">
        <Counter :name="tab.name" :form="tab.form" :ruleForm="tab.rule" :source="tab.source" :expression="tab.expression" :result="tab.result" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from '@/components/Counter.vue'

export default {
  name: 'Home',
  data() {
    return {
      activeTab: 'finalIncome',
      tabs: [
        {
          name: 'finalIncome',
          label: '最终收益',
          result: {
            label: '最终收益',
            unit: '元'
          },
          expression:
            'function(obj) { return obj.principal * Math.pow(1 + obj.yields / 100, obj.years)}',
          source: [
            {
              name: 'principal',
              label: '本金',
              unit: '元',
              placeholder: '请输入金额'
            },
            {
              name: 'yields',
              label: '年化收益率',
              unit: '%',
              placeholder: '请输入收益率'
            },
            {
              name: 'years',
              label: '投资年限',
              unit: '年',
              placeholder: '请输入年限'
            }
          ],
          rule: {
            principal: [
              {
                required: true,
                message: '请输入本金',
                trigger: 'blur'
              },
              {
                type: 'number',
                message: '请输入数字'
              }
            ],
            yields: [
              {
                required: true,
                message: '请输入年化收益率',
                trigger: 'blur'
              },
              {
                type: 'number',
                message: '请输入数字'
              }
            ],
            years: [
              {
                required: true,
                message: '请输入投资年限',
                trigger: 'blur'
              },
              {
                type: 'number',
                message: '请输入数字'
              }
            ]
          },
          form: {}
        },
        {
          name: 'yield',
          label: '收益率',
          result: {
            label: '年化收益率',
            unit: '%'
          },
          expression:
            'function(obj) { return (Math.pow(obj.sale / obj.purchase, 1 / obj.years) - 1) * 100}',
          source: [
            {
              name: 'purchase',
              label: '买入价格',
              unit: '元',
              placeholder: '请输入金额'
            },
            {
              name: 'sale',
              label: '卖出价格',
              unit: '元',
              placeholder: '请输入金额'
            },
            {
              name: 'years',
              label: '持有年限',
              unit: '年',
              placeholder: '请输入年限'
            }
          ],
          rule: {
            purchase: [
              {
                required: true,
                message: '请输入买入价格',
                trigger: 'blur'
              },
              {
                type: 'number',
                message: '请输入数字'
              }
            ],
            sale: [
              {
                required: true,
                message: '请输入卖出价格',
                trigger: 'blur'
              },
              {
                type: 'number',
                message: '请输入数字'
              }
            ],
            years: [
              {
                required: true,
                message: '请输入持有年限',
                trigger: 'blur'
              },
              {
                type: 'number',
                message: '请输入数字'
              }
            ]
          },
          form: {}
        },
        {
          name: 'sureCast',
          label: '定投',
          result: {
            label: '投资总收益',
            unit: '元'
          },
          expression:
            'function(obj) {let percentage = obj.yields / 100;let rate = percentage + 1;let part = Math.pow(rate, obj.years) - 1;return (12 * obj.income * rate * part) / percentage}',
          source: [
            {
              name: 'years',
              label: '投资时长',
              unit: '年',
              placeholder: '请输入年限'
            },
            {
              name: 'yields',
              label: '年化收益率',
              unit: '%',
              placeholder: '请输入收益率'
            },
            {
              name: 'income',
              label: '每月存入',
              unit: '元',
              placeholder: '请输入金额'
            }
          ],
          rule: {
            income: [
              {
                required: true,
                message: '请输入每月存入',
                trigger: 'blur'
              },
              {
                type: 'number',
                message: '请输入数字'
              }
            ],
            yields: [
              {
                required: true,
                message: '请输入年化收益率',
                trigger: 'blur'
              },
              {
                type: 'number',
                message: '请输入数字'
              }
            ],
            years: [
              {
                required: true,
                message: '请输入投资时长',
                trigger: 'blur'
              },
              {
                type: 'number',
                message: '请输入数字'
              }
            ]
          },
          form: {}
        }
      ]
    }
  },
  components: {
    Counter
  }
}
</script>
<style scoped>
.tab {
  width: 350px;
  margin: 0 auto;
}
</style>
