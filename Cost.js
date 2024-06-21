function calculateCost() {
    var hours = parseFloat(document.getElementById('hours').value);
    var hourlyRate = parseFloat(document.getElementById('hourly-rate').value);
    var materialCost = parseFloat(document.getElementById('material-cost').value);
    var currency = document.getElementById('currency').value;
    
    // Ensure hourly input doesn't go below zero
    if (hours < 0) {
      hours = 0;
      document.getElementById('hours').value = 0;
    }
    
    // Calculate total cost
    var totalCost = hours * hourlyRate + materialCost;
    
    // Format total cost based on currency
    var formattedCost = formatCurrency(totalCost, currency);
    
    // Display total cost
    document.getElementById('cost-value').textContent = formattedCost;
  }
  
  function formatCurrency(amount, currency) {
    switch (currency) {
      case 'usd':
        return '$' + amount.toFixed(2);
      case 'eur':
        return '€' + amount.toFixed(2);
      case 'gbp':
        return '£' + amount.toFixed(2);
      case 'ngn':
        return '₦' + amount.toFixed(2);
      default:
        return '$' + amount.toFixed(2);
    }
  }
  