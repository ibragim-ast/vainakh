export default function InfoPage() {
  return (
    <main className="pt-32 pb-20 bg-brand-light">
      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full">
        <h1 className="font-sans font-bold text-4xl md:text-5xl text-brand-dark">
          Сведения об организации
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h2 className="text-2xl font-bold text-brand-orange mb-6">
              Базовая информация
            </h2>
            <ul className="flex flex-col gap-3 text-brand-dark/80">
              <li>
                <strong>Полное наименование:</strong> Государственное автономное
                учреждение «Государственный академический ансамбль танца
                «Вайнах»
              </li>
              <li>
                <strong>Краткое наименование:</strong> ГАУ «Государственный
                академический ансамбль танца «Вайнах»
              </li>
              <li>
                <strong>Дата создания:</strong> 01.08.1939
              </li>
              <li>
                <strong>Юридический адрес:</strong> 364024, Чеченская
                Республика, г. Грозный, ул. Шейха Али Митаева, 6
              </li>
              <li>
                <strong>Фактический адрес:</strong> 364024, Чеченская
                Республика, г. Грозный, ул. Шейха Али Митаева, 6
              </li>
              <li>
                <strong>Телефон / Факс:</strong> 8 (8712) 22-58-12
              </li>
              <li>
                <strong>E-mail:</strong> gat_vainah@mail.ru
              </li>
              <li>
                <strong>Официальный сайт:</strong> ans-vaynah.ru
              </li>
            </ul>
          </div>

          {/* Блок 2: Сведения об учредителе */}
          <div>
            <h2 className="text-2xl font-bold text-brand-orange mb-6">
              Сведения об учредителе
            </h2>
            <ul className="flex flex-col gap-3 text-brand-dark/80">
              <li>
                <strong>Учредитель:</strong> Министерство культуры Чеченской
                Республики
              </li>
              <li>
                <strong>Телефон:</strong> 8 (8712) 22-58-12
              </li>
              <li>
                <strong>E-mail:</strong> mail@mk-chr.ru
              </li>
              <li>
                <strong>Сайт:</strong> mk-chr.ru
              </li>
              <li>
                <strong>График работы:</strong> Понедельник — Пятница, с 9:00 до
                18:00
              </li>
            </ul>
          </div>

          {/* Блок 3: Руководство и график работы */}
          <div>
            <h2 className="text-2xl font-bold text-brand-orange mb-6">
              Руководство и график работы
            </h2>
            <ul className="flex flex-col gap-3 text-brand-dark/80">
              <li>
                <strong>Директор:</strong> Байсарова Марет Дениевна | Тел: 8
                (8712) 22-58-12 | Email: gat_vainah@mail.ru
              </li>
              <li>
                <strong>Художественный руководитель:</strong> Авторханов
                Абумуслим Исмаулович | Тел: 8 (8712) 22-58-12 | Email:
                gat_vainah@mail.ru
              </li>
              <li>
                <strong>Режим работы:</strong> Понедельник — Пятница, с 09:00 до
                18:00
              </li>
            </ul>
          </div>

          {/* Блок 4: Реквизиты */}
          <div>
            <h2 className="text-2xl font-bold text-brand-orange mb-6">
              Реквизиты
            </h2>
            <ul className="flex flex-col gap-3 text-brand-dark/80 text-sm">
              <li>
                <strong>ИНН / КПП:</strong> 2014001872 / 201401001
              </li>
              <li>
                <strong>ОГРН:</strong> 1022002543936
              </li>
              <li>
                <strong>Дата гос. регистрации:</strong> 05.09.2001
              </li>
              <li>
                <strong>ОКПО / ОКФС / ОКВЭД:</strong> 35081489 / 13 / 90.01
              </li>
              <li>
                <strong>ОКАТО:</strong> 96401364000
              </li>
              <li>
                <strong>Рег. номер ФСС:</strong> 2000011190
              </li>
              <li>
                <strong>Р/С:</strong> 03224643960000009400
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
