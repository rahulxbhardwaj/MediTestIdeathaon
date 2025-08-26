import { Droplet, Palette, Smartphone, Clock, Globe, Lightbulb, Target, Users, Zap } from "lucide-react";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white text-slate-800">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-medical-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MT</span>
              </div>
              <span className="font-semibold text-xl text-slate-800">MediTest</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-slate-600 hover:text-medical-blue transition-colors"
                data-testid="nav-how-it-works"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('diseases')}
                className="text-slate-600 hover:text-medical-blue transition-colors"
                data-testid="nav-diseases"
              >
                Diseases
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="text-slate-600 hover:text-medical-blue transition-colors"
                data-testid="nav-process"
              >
                Process
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-soft-gray to-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              One Strip. <span className="text-medical-blue">Multiple Tests.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionary diagnostic solution that detects Anemia, Malaria, Typhoid, and Diabetes from a single drop of blood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4 hover:transform hover:-translate-y-1 transition-transform duration-200" data-testid="feature-fast">
                <div className="w-12 h-12 bg-success-green/10 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-success-green" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-slate-800">Fast Results</div>
                  <div className="text-sm text-slate-600">Within minutes</div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4 hover:transform hover:-translate-y-1 transition-transform duration-200" data-testid="feature-affordable">
                <div className="w-12 h-12 bg-healthcare-teal/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-slate-800">Affordable</div>
                  <div className="text-sm text-slate-600">Cost-effective testing</div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4 hover:transform hover:-translate-y-1 transition-transform duration-200" data-testid="feature-accurate">
                <div className="w-12 h-12 bg-medical-blue/10 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-medical-blue" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-slate-800">Accurate</div>
                  <div className="text-sm text-slate-600">Reliable diagnostics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diseases Section */}
      <section id="diseases" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Four Critical Diseases, One Simple Test
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our innovative test strip can simultaneously detect multiple conditions, providing comprehensive health screening in a single test.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center hover:transform hover:-translate-y-1 transition-transform duration-200" data-testid="disease-anemia">
              <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-3xl">🩸</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Anemia</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Detects low red blood cell count or hemoglobin levels, crucial for identifying iron deficiency.
              </p>
              <div className="mt-4 px-3 py-1 bg-red-200 text-red-800 text-xs font-medium rounded-full inline-block">
                Blood Disorder
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 text-center hover:transform hover:-translate-y-1 transition-transform duration-200" data-testid="disease-malaria">
              <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-3xl">🦟</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Malaria</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Identifies malaria parasites in blood, enabling quick treatment and preventing complications.
              </p>
              <div className="mt-4 px-3 py-1 bg-yellow-200 text-yellow-800 text-xs font-medium rounded-full inline-block">
                Parasitic Infection
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center hover:transform hover:-translate-y-1 transition-transform duration-200" data-testid="disease-typhoid">
              <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-3xl">💊</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Typhoid</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Detects bacterial infection markers for typhoid fever, ensuring timely antibiotic treatment.
              </p>
              <div className="mt-4 px-3 py-1 bg-purple-200 text-purple-800 text-xs font-medium rounded-full inline-block">
                Bacterial Infection
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:transform hover:-translate-y-1 transition-transform duration-200" data-testid="disease-diabetes">
              <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-3xl">🍬</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Diabetes</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Measures blood glucose levels to detect diabetes and monitor blood sugar management.
              </p>
              <div className="mt-4 px-3 py-1 bg-blue-200 text-blue-800 text-xs font-medium rounded-full inline-block">
                Metabolic Disorder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Simple, fast, and accurate testing in just three easy steps.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {/* Step 1 */}
            <div className="text-center" data-testid="step-1">
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto bg-medical-blue rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-success-green rounded-full flex items-center justify-center">
                  <Droplet className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Add Blood Drop</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Place a single drop of blood on the test strip. No special preparation or fasting required.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-full h-32 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg flex items-center justify-center relative">
                  <div className="w-20 h-6 bg-white border-2 border-gray-400 rounded-sm relative">
                    <div className="absolute -top-1 right-2 w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2">Test strip with blood sample</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center" data-testid="step-2">
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto bg-healthcare-teal rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-success-green rounded-full flex items-center justify-center">
                  <Palette className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Strip Changes Color</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                The strip reacts to different diseases with distinct color patterns, providing immediate visual indication.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-full h-32 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                  <div className="w-20 h-6 bg-gradient-to-r from-red-300 via-yellow-300 to-blue-300 border-2 border-gray-400 rounded-sm"></div>
                </div>
                <p className="text-xs text-slate-500 mt-2">Color patterns indicate different conditions</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center" data-testid="step-3">
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto bg-success-green rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-success-green rounded-full flex items-center justify-center">
                  <Smartphone className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Get Digital Results</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Insert the strip into our analyzer for precise digital readout and detailed health report.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-full h-32 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg flex items-center justify-center relative">
                  <div className="w-16 h-24 bg-slate-800 rounded-lg flex flex-col items-center justify-center">
                    <div className="w-12 h-16 bg-green-400 rounded mb-1 flex items-center justify-center">
                      <span className="text-xs text-green-800 font-bold">✓</span>
                    </div>
                    <div className="w-8 h-1 bg-gray-600 rounded"></div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2">Digital analyzer displays results</p>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto" data-testid="results-display">
            <h4 className="text-lg font-semibold text-slate-800 mb-6 text-center">Sample Results Display</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                <span className="font-medium text-slate-700">Anemia</span>
                <span className="text-green-600 font-semibold">✓ Normal</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                <span className="font-medium text-slate-700">Malaria</span>
                <span className="text-green-600 font-semibold">✓ Negative</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                <span className="font-medium text-slate-700">Typhoid</span>
                <span className="text-red-600 font-semibold">⚠ Positive</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                <span className="font-medium text-slate-700">Diabetes</span>
                <span className="text-green-600 font-semibold">✓ Normal</span>
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-slate-600">
              Results available in under 5 minutes
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Our Solution?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Designed for healthcare providers, clinics, and remote communities worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6" data-testid="benefit-time-efficient">
              <div className="w-16 h-16 mx-auto mb-6 bg-medical-blue/10 rounded-2xl flex items-center justify-center">
                <Clock className="w-8 h-8 text-medical-blue" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Time-Efficient</h3>
              <p className="text-slate-600">
                Get results for four different conditions in the time it traditionally takes to test for one.
              </p>
            </div>

            <div className="text-center p-6" data-testid="benefit-accessible">
              <div className="w-16 h-16 mx-auto mb-6 bg-healthcare-teal/10 rounded-2xl flex items-center justify-center">
                <Globe className="w-8 h-8 text-healthcare-teal" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Accessible</h3>
              <p className="text-slate-600">
                Perfect for remote areas and resource-limited settings where comprehensive testing is challenging.
              </p>
            </div>

            <div className="text-center p-6" data-testid="benefit-user-friendly">
              <div className="w-16 h-16 mx-auto mb-6 bg-success-green/10 rounded-2xl flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-success-green" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">User-Friendly</h3>
              <p className="text-slate-600">
                Minimal training required. Visual color indicators provide immediate preliminary results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-medical-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">MT</span>
              </div>
              <span className="font-semibold text-2xl">MediTest</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">
              Affordable, Fast, Accurate – Healthcare for Everyone.
            </h3>
            
            <p className="text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Our mission is to democratize healthcare diagnostics by making comprehensive disease testing accessible, affordable, and efficient for communities worldwide.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center" data-testid="footer-vision">
                <div className="text-3xl mb-2">
                  <Target className="w-8 h-8 mx-auto text-medical-blue" />
                </div>
                <div className="font-semibold mb-1">Our Vision</div>
                <div className="text-sm text-slate-400">Universal access to diagnostic testing</div>
              </div>
              <div className="text-center" data-testid="footer-impact">
                <div className="text-3xl mb-2">
                  <Users className="w-8 h-8 mx-auto text-healthcare-teal" />
                </div>
                <div className="font-semibold mb-1">Our Impact</div>
                <div className="text-sm text-slate-400">Serving underserved communities globally</div>
              </div>
              <div className="text-center" data-testid="footer-promise">
                <div className="text-3xl mb-2">
                  <Zap className="w-8 h-8 mx-auto text-success-green" />
                </div>
                <div className="font-semibold mb-1">Our Promise</div>
                <div className="text-sm text-slate-400">Reliable results when they matter most</div>
              </div>
            </div>
            
            <div className="border-t border-slate-800 pt-8">
              <p className="text-slate-400 text-sm">
                &copy; 2024 MediTest. Advancing global health through innovative diagnostics.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
