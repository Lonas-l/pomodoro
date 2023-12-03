# Precondition

1. Open Application
2. Login with correct data (username: user | password: user)
3. Click on "Log In" Button
4. Wait for loading (if it needs)

# Test Cases

| Test Case ID | Test Case Description                                                                            | Test Steps                                                                                    | Test Data                    | Expected Results                                                        | Actual Results | Pass/Fail |
|--------------|--------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|------------------------------|-------------------------------------------------------------------------|----------------|-----------|
| TC_AP_001    | The user name appears in the header on the right                                                 | 1. Check right side of header                                                                 | -                            | Should visible user name (user)                                         | -              | -         |
| TC_AP_002    | After click on the user name, popup appears                                                      | 1. Click on the user name button in right header side.                                        | -                            | Popup appears                                                           | -              | -         |
| TC_AP_003    | After clicking the logout button, the user should be de-authorized, and their session terminated | 1. Click on the user name button in right header side. <br/> 2. Click on the "Log Out" button | -                            | User doesn't have access to application and redirect to the login page. | -              | -         |
| TC_AP_004    | Cross-platform compatibility                                                                     | 1. Test the application view and functional on different platforms (Windows, macOS, Linux).   | -                            | App functions correctly on all platforms.                               | -              | -         |
| TC_AP_005    | Cross-browser compatibility                                                                      | 1. Test the application in different browsers (Chrome, Firefox, Safari).                      | -                            | App functions correctly in all major browsers.                          | -              | -         |
| TC_AP_006    | Testing the app on different devices                                                             | 1. Test the application on various devices with different screen resolutions.                 | -                            | App functions correctly on different devices.                           | -              | -         |
| TC_AP_007    | After entering non exist routes, app redirect you to timer page if you authorized                | 1. Open nonexistent link                                                                      | {baseUrl}/asdkasdmasldnmasdn | Redirect to {baseUrl}/                                                  | -              | -         |
| TC_AP_008    | After entering non exist routes, app redirect you to login page                                  | 1. Logout with any way <br/> 2. Open nonexistent link                                         | {baseUrl}/asdkasdmasldnmasdn | Redirect to {baseUrl}/login                                             | -              | -         |

