import { shallowMount } from '@vue/test-utils'
import HomePay from '@/components/HomePay.vue'

describe('HomePay.vue', () => {
  let wrapper 
  beforeEach(() => {
  wrapper = shallowMount(HomePay);
  });
  it('does a wrapper exist', () => {
    expect(wrapper.exists()).toBe(true)
  });
  it('Testing headings', () => {
    expect(wrapper.text()).toContain('Gallagher Communication');
    expect(wrapper.text()).toContain('Anunnal Net Pay Calc');
  });
  it('test calcSalary test case 1', () =>{
    wrapper.vm.grossSalary = 15000;
    wrapper.vm.totalAnnualTax = 0;
    wrapper.vm.totalAnnualNI = 0;
    wrapper.vm.annulaNetPay = 0;
    wrapper.vm.calcSalary();
    expect(wrapper.vm.annulaNetPay).toEqual(15000);
    expect(wrapper.vm.totalAnnualTax).toEqual(0);
    expect(wrapper.vm.totalAnnualNI).toEqual(0);
  });
  it('test calcSalary test case 2', () =>{
    wrapper.vm.grossSalary = 20000;
    wrapper.vm.totalAnnualTax = 0;
    wrapper.vm.totalAnnualNI = 0;
    wrapper.vm.annulaNetPay = 0;
    wrapper.vm.calcSalary();
    expect(wrapper.vm.annulaNetPay).toEqual(18400);
    expect(wrapper.vm.totalAnnualTax).toEqual(1000);
    expect(wrapper.vm.totalAnnualNI).toEqual(600);
  });
  it('test calcSalary test case 3', () =>{
    wrapper.vm.grossSalary = 55000;
    wrapper.vm.totalAnnualTax = 0;
    wrapper.vm.totalAnnualNI = 0;
    wrapper.vm.annulaNetPay = 0;
    wrapper.vm.calcSalary();
    expect(wrapper.vm.annulaNetPay).toEqual(41700);
    expect(wrapper.vm.totalAnnualTax).toEqual(9000);
    expect(wrapper.vm.totalAnnualNI).toEqual(4300);
  });
})
