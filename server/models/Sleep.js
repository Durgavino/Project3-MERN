const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const sleepSchema = new mongoose.Schema({
    // user: [
    //     {
    //         type:Schema.Types.ObjectId,
    //         ref: "User"
    //     }
    // ],
    bedTime: {
        type: String,
        required: true,
    },
    wakeUpTime: {
        type: String,
        required: true,
    },
    

});
sleepSchema.virtual("sleepDuration").get(function () {
    const bedTime = this.bedTime;
    const wakeUpTime = this.wakeUpTime;
    // calculate the difference between bedtime and wakeupTime
    const diff = wakeUpTime > bedTime ? wakeUpTime - bedTime : wakeUpTime + 24 - bedTime;
    return diff;
    //    return  (-(this.bedTime-12)+(0+this.wakeUpTime))
})

const Sleep = mongoose.model('Sleep', sleepSchema);

module.exports = Sleep;

