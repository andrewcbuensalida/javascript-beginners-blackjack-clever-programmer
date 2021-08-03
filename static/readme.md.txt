for for html and css tutorial, watch https://www.youtube.com/watch?v=mU6anWqZJcc&t=5963
for route 53 domain name, (a bit tricky) setup https://www.youtube.com/watch?v=jS6rrOO04y8
when searching for your new website, http, not https
aws is hosting it. route 53 to register domain name. cloudfront, a cdn,  to make data transfer faster.
aws s3 is the webhosting service for static websites, meaning not requiring a server. 
use aws amplify next time, a little more complex. didnt use ec2, which is a virtual machine.
aws lightsail is lighter version of ec2.
aws elastic beanstalk is an orchestration tool to create an ec2 instance.
not the most organized css or html
position: static is the default
relative you need to change left right top bottom, changes relative to default
absolute, changes relative to the nearest ancestor that has position relative
fixed is fixed no matter if you scroll, need top bottom
z-index only works with position relative or absolute
selectors
div > h1 selects h1s that are directly inside a div
#something::before puts content before element with id something
.apple::first-letter styles the first letter
gradient
:hover
:root is the parent of all parent elements
transform: skews, rotates, 
scales bigger or smaller in x or y direction
translates moves in x and y direction etc
transition: change property over time
animation: change over time with points
media query looks at display size
last rule and calculated priority
variables
pexel has stock images
font awesome has icons
google fonts has fonts
box and text shadow generators
gradient generators
can i use .com checks if you can use a property in a browser
browser prefixes
autoprefixer generates css for all browsers


(0:00) Intro
(2:47) What is HTML
(5:11) Google Chrome and Visual Studio Code
(6:02) Download Google Chrome
(8:11) Download Visual Studio Code
(13:58) Create A Project
(16:09) First Webpage
(20:35) Visual Code Settings
(22:48) Download Live Server Extension
(26:59) Basic HTML Document Structure
(29:05) Implementing Basic Document Structure
(34:50) Word Wrap and Emmet
(40:24) Heading Elements
(44:33) Paragraph Elements
(47:50) White Space Collapsing
(49:22) Lorem Ipsum Dummy Text
(51:17) Images
(57:15) Multiple Path Options
(1:00:06) External Images
(1:02:43) Nice Images
(1:05:49) Width and Height Attribute
(1:08:40) Crop Images
(1:12:07) Proper Path
(01:15:37) Comments And Line Breaks
(01:19:47) External Links
(01:23:32) Internal Links
(01:25:53) Links Within Page
(01:30:10) Empty Links
(01:32:39) Sup And Sub Elements
(01:34:39) Strong And Em Elements
(01:37:02) Special Characters In Html
(01:38:58) Unordered Lists
(01:41:25) Ordered Lists
(01:42:18) Nested Lists
(01:43:57) Table Element
(01:46:10) Forms - Input And Submit Elements
(01:58:12) Forms - Textarea - Radio - Checkbox
(02:09:40) Prettier And Code Formatter
(02:14:56) Keyboard Shortcuts
(02:26:06) External Resources - Head Element
(02:30:15) Html Project Intro
(02:32:16) Project Setup
(02:35:17) Download Images
(02:39:02) Logo, Heading, Navigation
(02:42:51) Home Page Completed
(02:54:30) About Page
(02:58:09) Numbers Page
(03:04:14) Contact Page
(03:09:11) Resource Files
(03:09:42) Text Editor Setup
(03:16:03) Css Intro
(03:17:35) Workspace Setup
(03:20:22) Inline Css
(03:23:40) Course Resources
(03:25:01) Internal Css
(03:28:00) External Css
(03:39:40) Power Struggle
(03:44:17) Basic Css Syntax
(03:52:27) Element Selectors
(03:55:15) Grouping Selectors
(03:57:27) Id Selectors
(04:02:09) Class Selectors
(04:06:17) Id And Class Selector Summary
(04:08:30) Div And Span Elements
(04:16:44) CSS Inheritance
(04:20:08) More Info On Inheritance
(04:22:30) Last Rule, Specificity, Universal Selector
(04:27:33) Colors Intro
(04:28:13) Color And Background-Color Properties
(04:32:33) Color Names
(04:33:30) Rgb
(04:37:46) Rgba
(04:44:33) Hex
(04:50:58) Vs-Code Color Options
(04:52:57) External Resources
(04:55:39) Units Intro
(04:56:18) Pixels, Font-Size, Width, Height
(05:02:13) Percent Values
(05:05:44) Em Values
(05:11:42) Rem Values
(05:14:41) VH And VW
(05:19:14) Default Browser Syles
(05:29:07) Calc Function
(05:33:38) Typography Intro
(05:34:07) Font-Family
(05:36:47) Font-Stack Generic Fonts
(05:39:23) Google Fonts
(05:46:00) Font-Weight Font-Style
(05:53:30) Text-Align And Text-Indent
(05:56:52) More Text Properties
(06:04:31) Box-Model Intro
(06:04:53) Padding
(06:13:28) Margin
(06:19:01) Border
(06:23:57) Border-Radius, Negative Margin
(06:27:24) Outline Property
(06:34:58) Display Property Intro
(06:35:19) Display Property
(06:43:26) Basic Horizontal Centering
(06:48:11) Mobile Navbar Example
(06:58:29) Box-Sizing Border-Box
(07:06:46) Display Inline-Block
(07:09:29) Display:none, Opacity, Visibility
(07:16:20) Background-Image Intro
(07:16:43) Background Images Setup
(07:19:43) Background-Image-Property
(07:27:45) Background-Repeat
(07:34:07) Background-Size
(07:36:58) Background-Position
(07:41:18) Background-Attachment
(07:47:04) Linear-Gradients
(07:56:49) Background Image Shortcuts Combined
(08:06:56) Linear-Gradient Colorzilla
(08:11:08) Float Position Intro
(08:11:47) Float Property
(08:19:18) Float Property Column Layout Example
(08:25:59) Position Static
(08:30:44) Position Relative
(08:33:18) Position Absolute
(08:38:42) Position Fixed
(08:42:30) Media Quries
(08:57:07) Z-Index
(09:06:04) ::Before And ::After Pseudo Elements
(09:27:14) Css Selectors Intro
(09:28:26) Basic Selectors
(09:31:07) Descendant Child Selectors
(09:35:50) First Line And First Letter
(09:36:56) :Hover Pseudo-Class Selector
(09:40:03) Link Pseudo-Class Selectors
(09:44:36) Root Preudo-Class Selectors
(09:51:01) Transform,Transition,And Animations
(09:52:17) Transform:transition()
(09:58:52) Transform:scale()
(10:01:20) Transform:rotate()
(10:04:47) Transform:skew()
(10:06:31) Transition Property
(10:09:13) Multiple Transition
(10:11:11) Transition Delay
(10:16:36) Transition-Timing Function
(10:25:51) Animation
(10:35:51) Animation-Fill-Mode
(10:40:53) Last Module Intro
(10:41:32) Css Variables
(10:56:19) Font-Awesome Icons
(11:07:55) Text-Shadow Box-Shadow
(11:14:44) Browser Prefixes
(11:19:23) Semantic Tags
(11:24:11) Emmet Workflow