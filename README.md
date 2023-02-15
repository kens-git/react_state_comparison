<h1>About</h1>
<p>Base project for React state management library comparisons.</p>
<p>Specific implementations for each library are in their respective branch.</p>
<p>The project does not deal with data fetching nor server synchronization, but instead 
focuses on managing local application state. To this end, product data is hard-coded into 
the source files.</p>
<h1>Specs</h1>
<ul>
    <li>Light/dark theme switching</li>
    <li>User account balance (to simulate payment success/failure)</li>
    <li>List of products (sortable by name, price)</li>
    <li>Discounts for large purchases:
        <ul>
            <li>10% over $500</li>
            <li>20% over $1,000</li>
            <li>30% over $5,000</li>
            <li>Discounts are displayed in the cart and are updated as items are added/removed</li>
            <li>Discounts are applied during checkout</li>
        </ul>
    </li>
    <li>User favorite products:
        <ul>
            <li>Add</li>
            <li>Remove with button</li>
            <li>Favorite products no longer show the 'favorite' button when a product is added to favorites.</li>
        </ul>
    </li>
    <li>Shopping cart:
        <ul>
            <li>Add products</li>
            <li>Products can be sorted by name, price, quantity</li>
            <li>Increment/decrement product count</li>
            <li>Product count cannot go below 0, and cannot go above the available amount</li>
            <li>Remove products with buttons</li>
            <li>If an item that is already in the cart is added again, the amount is added to the existing amount in the cart (i.e., a new cart entry is not created)</li>
        </ul>
    </li>
    <li>Checkout:
        <ul>
            <li>Displays a pop-up on successful payment</li>
            <li>Displays an error message on payment failure (low account balance)</li>
            <li>Favorite products that are in the cart are removed from the favorites list on a successful payment.</li>
            <li>Inventory counts are decremented by the amount purchased on a successful payment.</li>
        </ul>
    </li>
</ul>
<h1>Write-Up</h1>
<p>The final write-up should include sections for:</p>
<ul>
    <li>A description of the library and its main features</li>
    <li>A description of the core concepts</li>
    <li>What was easy to implement with it</li>
    <li>What was difficult to implement with it</li>
    <li>Personal preferences (liked/disliked)</li>
</ul>
