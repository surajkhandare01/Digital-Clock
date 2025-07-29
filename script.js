 const quotes = {
      0: "Every great dream begins with a dreamer.",
      1: "Your limitation—it’s only your imagination.",
      2: "Push yourself, because no one else is going to do it for you.",
      3: "Success doesn’t just find you. You have to go out and get it.",
      4: "Great things never come from comfort zones.",
      5: "Wake up with determination. Go to bed with satisfaction.",
      6: "Don’t watch the clock; do what it does. Keep going.",
      7: "Dream it. Wish it. Do it.",
      8: "Stay positive. Work hard. Make it happen.",
      9: "Don’t stop when you’re tired. Stop when you’re done.",
      10: "It’s going to be hard, but hard does not mean impossible.",
      11: "The harder you work for something, the greater you’ll feel when you achieve it.",
      12: "Push harder than yesterday if you want a different tomorrow.",
      13: "Little things make big days.",
      14: "It always seems impossible until it’s done.",
      15: "Don’t limit your challenges. Challenge your limits.",
      16: "Keep your face always toward the sunshine—and shadows will fall behind you.",
      17: "You are capable of amazing things.",
      18: "Go the extra mile. It’s never crowded.",
      19: "Success is what comes after you stop making excuses.",
      20: "If you can dream it, you can do it.",
      21: "Small steps every day lead to big results.",
      22: "Believe in yourself and all that you are.",
      23: "Act as if what you do makes a difference. It does."
    };

    function updateClockAndQuote() {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
      const ampm = hours >= 12 ? 'PM' : 'AM';

      let displayHours = hours % 12 || 12;
      displayHours = displayHours < 10 ? '0' + displayHours : displayHours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      const timeString = `${displayHours}:${minutes}:${seconds} ${ampm}`;
      document.getElementById('clock').textContent = timeString;

      // Update quote once per hour
      const quote = quotes[hours] || "Keep going. You're doing great!";
      document.getElementById('quote').textContent = quote;
    }

    setInterval(updateClockAndQuote, 1000);
    updateClockAndQuote(); // Initial call
