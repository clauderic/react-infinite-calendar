Changelog
------------
### 1.1.15
- Fixes issues with weekdays not properly aligning with dates when scrollbars are visible (#21)
- Updated to the latest version of `react-virtualized`, which addresses an edge-case bug where an initial scroll offset prop is specified before external CSS stylesheets have loaded (#23)
- Fixes issues with the today helper offset calculation and added a new prop `todayHelperRowOffset` to customize the number of rows before the today helper becomes visible (#24)
- Fixes issue with percentage `width` (#14)

### 1.1.14
Minor bug fixes

### 1.1.13 – Year selection 🎉
Just click on the year in the header to test it out. The current year is underlined with the current `theme.todayColor` (orange by default). Keyboard support has also been tweaked to support this new functionality. Here's a preview:
<div>
<img width="325" alt="Year selection" src="https://cloud.githubusercontent.com/assets/1416436/15803422/b58e8704-2aaa-11e6-9c93-b1aa64fadc2e.png">
</div>

### 1.1.12 – Bug fixes 🙃
Fixes an issue with row calculation ([#5](https://github.com/clauderic/react-infinite-calendar/issues/5))
