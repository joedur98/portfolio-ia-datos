import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[72px]">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
          
          <div className="relative mx-auto max-w-6xl px-6 py-24 lg:py-32">
            <div className="flex flex-col items-center text-center">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="text-sm font-medium text-primary">Portfolio en Construccion</span>
              </div>

              {/* Main heading */}
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Transformando Datos en{" "}
                <span className="text-primary">Decisiones Estrategicas</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground lg:text-xl">
                Este portafolio presentara casos de estudio reales donde la Inteligencia Artificial 
                y el analisis de datos impulsan resultados tangibles para los negocios.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 lg:py-24 bg-card/50">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Vision del Portafolio
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Este espacio esta disenado para exhibir proyectos de consultoria en IA y datos, 
                demostrando valor tangible a una audiencia ejecutiva.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 */}
              <div className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Casos de Estudio</h3>
                <p className="text-sm text-muted-foreground">
                  6 proyectos completos con problema, solucion, metodologia y resultados medibles. 
                  Cada caso incluira dashboards, modelos y prototipos funcionales.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Filtros Inteligentes</h3>
                <p className="text-sm text-muted-foreground">
                  Sistema de navegacion por tipo de problema, industria, tipo de solucion e impacto. 
                  Disenado para que cada visitante encuentre casos relevantes rapidamente.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Metricas de Impacto</h3>
                <p className="text-sm text-muted-foreground">
                  Cada proyecto incluira KPIs claros: ROI, eficiencia operativa, reduccion de costos 
                  y crecimiento. Resultados cuantificables para decision makers.
                </p>
              </div>

              {/* Card 4 */}
              <div className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Data Products</h3>
                <p className="text-sm text-muted-foreground">
                  Galerias visuales de dashboards, arquitecturas de modelos ML, flujos automatizados 
                  y prototipos. Evidencia tangible de capacidad tecnica.
                </p>
              </div>

              {/* Card 5 */}
              <div className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Perfil Profesional</h3>
                <p className="text-sm text-muted-foreground">
                  Seccion dedicada a experiencia, credenciales y enfoque metodologico. 
                  Construyendo confianza con la audiencia ejecutiva desde el primer contacto.
                </p>
              </div>

              {/* Card 6 */}
              <div className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Escalable a 20+ Casos</h3>
                <p className="text-sm text-muted-foreground">
                  Arquitectura preparada para crecer. Sistema de plantillas y taxonomia consistente 
                  para anadir nuevos casos de estudio sin esfuerzo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Structure Preview Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Estructura de Cada Caso
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Cada caso de estudio seguira una plantilla estandarizada de 4 secciones 
                para garantizar consistencia y facilitar la comparacion.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />

              <div className="space-y-8 lg:space-y-0">
                {/* Step 1 */}
                <div className="relative lg:grid lg:grid-cols-2 lg:gap-8">
                  <div className="lg:text-right lg:pr-12">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                        1
                      </span>
                      <h3 className="text-lg font-semibold text-foreground">Hero del Caso</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Titulo del proyecto, contexto de la industria, definicion clara del problema 
                      e impacto esperado con visuales atractivos.
                    </p>
                  </div>
                  <div className="hidden lg:block" />
                </div>

                {/* Step 2 */}
                <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:pt-12">
                  <div className="hidden lg:block" />
                  <div className="lg:pl-12">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                        2
                      </span>
                      <h3 className="text-lg font-semibold text-foreground">Contexto y Proceso</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Analisis del problema, criterios de decision, metodologia aplicada 
                      y timeline del proyecto con diagrama visual.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:pt-12">
                  <div className="lg:text-right lg:pr-12">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                        3
                      </span>
                      <h3 className="text-lg font-semibold text-foreground">Data Products</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Galeria de capturas de dashboards, diagramas de arquitectura, 
                      flowcharts de flujos de trabajo y demos de prototipos.
                    </p>
                  </div>
                  <div className="hidden lg:block" />
                </div>

                {/* Step 4 */}
                <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:pt-12">
                  <div className="hidden lg:block" />
                  <div className="lg:pl-12">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                        4
                      </span>
                      <h3 className="text-lg font-semibold text-foreground">Resultados y Reflexion</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Metricas cuantitativas logradas, impacto cualitativo, 
                      aprendizajes clave y proximos pasos potenciales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-16 lg:py-24 bg-card/50">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 mb-6">
              <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-muted-foreground">En Desarrollo</span>
            </div>

            <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
              Proximamente: 6 Casos de Estudio
            </h2>

            <p className="text-muted-foreground mb-8">
              Este portafolio esta en construccion activa. Pronto encontraras casos de estudio 
              completos en industrias como Finanzas, Retail, Tecnologia y Salud, demostrando 
              soluciones de optimizacion, prediccion, automatizacion y analisis.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <span className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
                Optimizacion
              </span>
              <span className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
                Prediccion
              </span>
              <span className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
                Automatizacion
              </span>
              <span className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
                Analisis
              </span>
              <span className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
                Machine Learning
              </span>
              <span className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
                Dashboards
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
