document.getElementById('editor-area').addEventListener('keydown', function(e) {
    console.log(e);
    if (e.key === 'Tab') {
        e.preventDefault(); // Prevent the default tab behavior

        // Get the start and end positions of the selected text
        const start = this.selectionStart;
        const end = this.selectionEnd;

        // Set the value of the textarea to the text before the selection,
        // then a tab character, then the text after the selection
        this.value = this.value.substring(0, start) + '\t' + this.value.substring(end);

        // Move the caret to after the inserted tab character
        this.selectionStart = this.selectionEnd = start + 1;
    }
});
