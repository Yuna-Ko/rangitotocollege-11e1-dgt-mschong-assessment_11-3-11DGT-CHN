import tkinter as tk
window = tk.Tk()  # Assign the main window to a variable
label = tk.Label(
    text="Hello, Tkinter",
    foreground="white",  # Set the text color to white
    background="black",  # Set the background color to black
    width = 10,
    height = 10
)
button = tk.Button(
    text="Click Click",
    width = 30
)

button.pack()
label.pack()  # Makes the code visible
window.mainloop()  # Starts the loop for main window