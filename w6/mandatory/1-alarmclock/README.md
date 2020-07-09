# Sample (rough) solution to the alarm clock task from JS2

deployed here: https://cyf-alarm-clock-sample-soln.glitch.me/

[Original task statement](https://github.com/CodeYourFuture/js-exercises/tree/JS2-Week3-Homework/week-6/Homework/mandatory/1-alarmclock)

## Notes about this solution

- Only the main task is solved here, not the optional extra work.

- In reality I probably wouldn't use a global variable for secondsRemaining, but a "closure" from setAlarm.  
  However, we haven't learned about this yet. I've made [a remix of this project to show this alternative way](https://glitch.com/~cyf-alarm-clock-sample-soln-w-closure).

### Changes to the "do not change this code" part!

- I changed pauseAlarm() to stopAlarm()
- I passed audio as a param to setAlarm() - it needs to pass it on to whatever actually triggers the audio play.
