// 基于 EventEmitter 的自定义类
// 用 class & extends 感觉会更好

const EventEmitter = require('events');

const oneDayPlanRun = {
    '6:00': function () {
        console.log('早起！');
    },
    '7:00': function () {
        console.log('吃早餐！');
    },
}

function OneDayPlan () {
    EventEmitter.call(this);
}

Object.setPrototypeOf(OneDayPlan.prototype, EventEmitter.prototype);
Object.setPrototypeOf(OneDayPlan, EventEmitter);

const oneDayPlan = new OneDayPlan();

oneDayPlan.on('6:00', () => oneDayPlanRun['6:00']());
oneDayPlan.on('7:00', () => oneDayPlanRun['7:00']());

async function doMain () {
    oneDayPlan.emit('6:00');
    await sleep(2000);
    oneDayPlan.emit('7:00');
}

doMain();

async function sleep (time) {
    return new Promise(resolve => {
        setTimeout(() => resolve(1), time);
    })
}