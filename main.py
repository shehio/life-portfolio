import plotly.graph_objects as go

# Define your data
x_values = [1, 2, 3, 4, 5]  # x-coordinates
y_values = [10, 11, 12, 13, 14]  # y-coordinates
sizes = [40, 50, 60, 70, 80]  # sizes of the points
colors = ['red', 'blue', 'green', 'purple', 'orange']  # colors of the points

# Create a scatter plot
fig = go.Figure(data=go.Scatter(
    x=x_values,
    y=y_values,
    mode='markers',
    marker=dict(
        size=sizes,  # Set the size of each marker
        color=colors,  # Set the color of each marker
    )
))

# Display the plot
fig.show()