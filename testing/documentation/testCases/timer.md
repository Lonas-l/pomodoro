# Precondition

1. Open Application
2. Login with correct data (username: user | password: user)
3. Click on "Log In" Button
4. Wait for loading (if it needs)

# Test Cases

| Test Case ID | Test Case Description                                                                           | Test Steps                                                            | Test Data | Expected Results                                       | Actual Results | Pass/Fail |
|--------------|-------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|-----------|--------------------------------------------------------|----------------|-----------|
| TC_T_001     | Launching Timer with "Play" button                                                              | 1. Click on the "Start" button.                                       | -         | Timer starts counting down. Font weight bigger         | -              | -         |
| TC_T_002     | Pausing the Timer                                                                               | 1. Click on the "Start" button. <br/> 2. Click on the "Pause" button. | -         | Timer stops.                                           | -              | -         |
| TC_T_003     | Timer colors equal different timer mode                                                         | 1. Investigate colors for each mode                                   | -         | short break = green, long break = blue, pomodoro = red | -              | -         |
| TC_T_004     | Next button changes mod                                                                         | 1. Click on the "Next" button                                         | -         | Mode is changed                                        | -              | -         |
| TC_T_004     | Iteration count is updated after click on the "next button" or time is over with any break mode | 1. Change mode to any break. <br/>2. Click on the "Next" button.      | -         | Iteration count added 1                                | -              | -         |
