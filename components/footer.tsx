export default function Footer() {
  return (
    <div className="flex flex-col lg:flex-row justify-start items-start p-24 gap-32 bg-slate-800 text-slate-50">
      <div>
        <p className="font-bold text-lg">Imprint & Contact</p>
        <p>Purpose UG (limited liability)</p>
        <p>Seidl-Kreuz-Weg 94</p>
        <p>85737 Ismaning</p>
      </div>
      <div>
        <p className="font-bold text-lg">Registered office of the company</p>
        <p>Ismaning - HRB Munich 292052</p>
        <p>Tax number: 143/173/60143</p>
        <p>VAT ID No.: DE368116002</p>
        <p>Managing Director: Lukas Faber</p>
      </div>
      <div>
        <p>
          Feel free to contact us:{' '}
          <a
            className="font-bold hover:underline"
            href="mailto:l.faber@purpose.hr"
          >
            l.faber@purpose.hr
          </a>
        </p>
      </div>
    </div>
  )
}
