import Footer from "components/sections/Footer/Footer"
import Header from "components/sections/Header/Header"

// 1. Stworz podstrone /about w ktorej wyswietl jakis tekst. Podstrona About powinna rowniez posiadac nawigacje

// 2. Stworz sekcje Footer, w ktorej umiesc nawigacje do strony glownej, do strony add i do strony about

// 3. Uzyj sekcji Footer w kazdej podstronie

function AddMessagePage() {
  return (
    <div>
      <Header logo="Instagram App"/>

      <h1>Hello from Add message page</h1>
      <Footer />
    </div>

  )
}

export default AddMessagePage