<template>
  <div>
      <header>
          <h2> Gallagher Communication </h2>
      </header>
      <main>
          <h4>Anunnal Net Pay Calc</h4>
          <label for="gross_pay">Enter Gross Annual Salary</label>
          <br>
          &pound; <input v-model="grossSalary" type="Number" id="gross_pay">
          <br>
          <table class="tbl">
              <tr>
                  <td class="heading">
                      <label>Total annual tax due: </label>
                  </td>
                  <td class="value">
                      &pound;{{ totalAnnualTax }}
                  </td>
              </tr>
              <tr>
                  <td class="heading">
                      <label>Total annual NI due:  </label>
                  </td>
                  <td class="value">
                      &pound;{{ totalAnnualNI }}
                  </td>
              </tr>
              <tr>
                  <td class="heading">
                      <label>Annual net pay: </label>
                  </td>
                  <td class="value">
                      &pound;{{ annulaNetPay }}
                  </td>
              </tr>
          </table>
      </main>
      <footer>
          <p>&copy; 2023 Arthur J. Gallagher & Co. </p>
      </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePay',
  props: {
      grossSalaryProp: {
          type: Number,
          default: 0
      }
  },
  data() {
      return {
          grossSalary: 0,
          buttonText: "Enter Salary",
          totalAnnualTax: 0,
          totalAnnualNI: 0,
          annulaNetPay: 0,
      }
  },
  watch: {
      grossSalary() {
          this.calcSalary();
      }
  },
  methods: {
      calcSalary() {
          this.calcTaxDueAndNIDue(this.grossSalary);
          this.calcNetPay(this.grossSalary);
      },
      calcTaxDueAndNIDue(sal) {
          this.totalAnnualTax = 0;
          this.totalAnnualNI = 0;
          if (sal > 15000) {
              let taxable = 0;
              if (sal > 50000) {
                  taxable = 35000;
              } else {
                  taxable = sal - 15000;
              }
              this.totalAnnualTax += taxable * 0.2;
              this.totalAnnualNI += taxable * .12;
          }
          if (sal > 50000) {
              const taxable = sal - 50000;
              this.totalAnnualTax += taxable * 0.4;
              this.totalAnnualNI += taxable * 0.02;
          }
      },
      calcNetPay() {
          this.annulaNetPay = this.grossSalary - (this.totalAnnualTax + this.totalAnnualNI);
      }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
box-sizing: border-box;
}
.tbl {
  margin-left: auto;
  margin-right: auto;
}
.heading {
  text-align: right;
  width: 300px;
}
.value {
  text-align: left;
  width: 200px;
}
</style>
