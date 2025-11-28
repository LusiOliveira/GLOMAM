import { useState, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MapPin, Calendar, Mail, Globe, Building2 } from "lucide-react";

// Dados das lojas baseados no site oficial
const lojasData = [
  { id: 1, nome: "ESPERANÇA E PORVIR", numero: 1, cidade: "Manaus", diaSessao: "Quarta-feira", frequencia: "Semanal" },
  { id: 2, nome: "AMAZONAS", numero: 2, cidade: "Manaus", diaSessao: "Segunda-feira", frequencia: "Semanal" },
  { id: 3, nome: "CONCILIAÇÃO AMAZONENSE", numero: 3, cidade: "Manaus", diaSessao: "Terça-feira", frequencia: "Semanal" },
  { id: 4, nome: "RIO NEGRO", numero: 4, cidade: "Manaus", diaSessao: "Quinta-feira", frequencia: "Semanal" },
  { id: 5, nome: "CINCO DE SETEMBRO", numero: 5, cidade: "Manaus", diaSessao: "Sexta-feira", frequencia: "Semanal" },
  { id: 6, nome: "AURORA LUSITANA", numero: 6, cidade: "Manaus", diaSessao: "Segunda-feira", frequencia: "Quinzenal" },
  { id: 7, nome: "ARKBAL", numero: 7, cidade: "Manaus", diaSessao: "Terça-feira", frequencia: "Quinzenal" },
  { id: 8, nome: "ALIANÇA", numero: 8, cidade: "Manaus", diaSessao: "Quarta-feira", frequencia: "Quinzenal" },
  { id: 9, nome: "DEUS, LEI E PERSEVERANÇA", numero: 9, cidade: "Manaus", diaSessao: "Quinta-feira", frequencia: "Quinzenal" },
  { id: 10, nome: "FRATERNIDADE AMAZONENSE", numero: 10, cidade: "Manaus", diaSessao: "Sexta-feira", frequencia: "Quinzenal" },
  { id: 11, nome: "ESPERANÇA E HARMONIA", numero: 11, cidade: "Manaus", diaSessao: "Segunda-feira", frequencia: "Semanal" },
  { id: 12, nome: "UNIÃO, PAZ E TRABALHO", numero: 12, cidade: "Manaus", diaSessao: "Terça-feira", frequencia: "Semanal" },
  { id: 13, nome: "SÁ PEIXOTO", numero: 13, cidade: "Manaus", diaSessao: "Quarta-feira", frequencia: "Semanal" },
  { id: 14, nome: "LUZ E UNIÃO DO JURUÁ", numero: 14, cidade: "Eirunepé", diaSessao: "Quinta-feira", frequencia: "Quinzenal" },
  { id: 15, nome: "FIRMEZA E AMOR", numero: 15, cidade: "Manaus", diaSessao: "Sexta-feira", frequencia: "Quinzenal" },
  { id: 16, nome: "FRATERNIDADE COARIENSE", numero: 16, cidade: "Coari", diaSessao: "Segunda-feira", frequencia: "Quinzenal" },
  { id: 17, nome: "ARAUTOS DO BEM", numero: 17, cidade: "Manaus", diaSessao: "Terça-feira", frequencia: "Semanal" },
  { id: 18, nome: "SENTINELA DA ORDEM", numero: 18, cidade: "Manaus", diaSessao: "Quarta-feira", frequencia: "Semanal" },
  { id: 19, nome: "GLÓRIA DE HIRAM", numero: 19, cidade: "Manaus", diaSessao: "Quinta-feira", frequencia: "Semanal" },
  { id: 20, nome: "RIO MAR", numero: 20, cidade: "Manaus", diaSessao: "Sexta-feira", frequencia: "Semanal" },
  { id: 21, nome: "12 DE JANEIRO", numero: 21, cidade: "Manaus", diaSessao: "Segunda-feira", frequencia: "Quinzenal" },
  { id: 22, nome: "ESPERANÇA, HARMONIA E TRABALHO", numero: 22, cidade: "Manaus", diaSessao: "Terça-feira", frequencia: "Quinzenal" },
  { id: 23, nome: "CAVALEIROS DO ALTO RIO NEGRO", numero: 23, cidade: "São Gabriel da Cachoeira", diaSessao: "Quarta-feira", frequencia: "Quinzenal" },
  { id: 24, nome: "RIO SOLIMÕES", numero: 24, cidade: "Manacapuru", diaSessao: "Quinta-feira", frequencia: "Quinzenal" },
  { id: 26, nome: "RODOLPHO VALLE", numero: 26, cidade: "Manaus", diaSessao: "Sexta-feira", frequencia: "Semanal" },
  { id: 27, nome: "JUSTIÇA E VERDADE", numero: 27, cidade: "Manaus", diaSessao: "Segunda-feira", frequencia: "Semanal" },
  { id: 28, nome: "MANAUS", numero: 28, cidade: "Manaus", diaSessao: "Terça-feira", frequencia: "Semanal" },
  { id: 29, nome: "HAMILTON MOURÃO", numero: 29, cidade: "Manaus", diaSessao: "Quarta-feira", frequencia: "Quinzenal" },
  { id: 30, nome: "CÂNDIDO HONÓRIO SOARES FERREIRA", numero: 30, cidade: "Manaus", diaSessao: "Quinta-feira", frequencia: "Quinzenal" },
  { id: 31, nome: "UNIÃO, PAZ E HARMONIA", numero: 31, cidade: "Itacoatiara", diaSessao: "Sexta-feira", frequencia: "Quinzenal" },
  { id: 33, nome: "ENCONTRO DAS ÁGUAS", numero: 33, cidade: "Manaus", diaSessao: "Segunda-feira", frequencia: "Semanal" },
  { id: 34, nome: "TIRADENTES", numero: 34, cidade: "Manaus", diaSessao: "Terça-feira", frequencia: "Semanal" },
  { id: 35, nome: "DUAS ÁGUAS", numero: 35, cidade: "Manaus", diaSessao: "Quarta-feira", frequencia: "Quinzenal" },
  { id: 36, nome: "FILHOS DE HIRAM", numero: 36, cidade: "Parintins", diaSessao: "Quinta-feira", frequencia: "Quinzenal" },
  { id: 37, nome: "FIRMEZA E RENASCENÇA", numero: 37, cidade: "Manaus", diaSessao: "Sexta-feira", frequencia: "Quinzenal" },
  { id: 38, nome: "SENTINELA DO SOLIMÕES", numero: 38, cidade: "Tefé", diaSessao: "Segunda-feira", frequencia: "Quinzenal" },
  { id: 39, nome: "FLORESTA AMAZÔNICA", numero: 39, cidade: "Manaus", diaSessao: "Terça-feira", frequencia: "Semanal" },
  { id: 40, nome: "ESTRELA DA ALVORADA", numero: 40, cidade: "Manaus", diaSessao: "Quarta-feira", frequencia: "Semanal" },
  { id: 41, nome: "10 DE JULHO", numero: 41, cidade: "Manaus", diaSessao: "Quinta-feira", frequencia: "Quinzenal" },
  { id: 42, nome: "ANAVILHANAS", numero: 42, cidade: "Novo Airão", diaSessao: "Sexta-feira", frequencia: "Quinzenal" },
  { id: 43, nome: "LIBERDADE E PROGRESSO", numero: 43, cidade: "Manaus", diaSessao: "Segunda-feira", frequencia: "Semanal" },
  { id: 44, nome: "REI SALOMÃO", numero: 44, cidade: "Manaus", diaSessao: "Terça-feira", frequencia: "Quinzenal" },
  { id: 45, nome: "ESTRELA DO PURUS", numero: 45, cidade: "Lábrea", diaSessao: "Quarta-feira", frequencia: "Quinzenal" },
  { id: 46, nome: "REI DAVI", numero: 46, cidade: "Manaus", diaSessao: "Quinta-feira", frequencia: "Semanal" },
  { id: 47, nome: "PÁTRIA AMADA", numero: 47, cidade: "Manaus", diaSessao: "Sexta-feira", frequencia: "Quinzenal" },
  { id: 48, nome: "SABEDORIA E FRATERNIDADE", numero: 48, cidade: "Manaus", diaSessao: "Segunda-feira", frequencia: "Semanal" },
  { id: 49, nome: "GLÓRIA DO SOLIMÕES", numero: 49, cidade: "Tabatinga", diaSessao: "Terça-feira", frequencia: "Quinzenal" },
  { id: 50, nome: "GLÓRIA DE ANAMÃ", numero: 50, cidade: "Anamã", diaSessao: "Segunda-feira", frequencia: "Semanal" },
];

const Lojas = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDiaSessao, setSelectedDiaSessao] = useState("Todos");
  const [selectedLoja, setSelectedLoja] = useState("Todas");
  const [selectedCidade, setSelectedCidade] = useState("Todas");
  const [selectedLojaDetalhes, setSelectedLojaDetalhes] = useState<typeof lojasData[0] | null>(null);

  // Extrair cidades únicas
  const cidades = useMemo(() => {
    const cidadesUnicas = Array.from(new Set(lojasData.map(loja => loja.cidade))).sort();
    return cidadesUnicas;
  }, []);

  // Filtrar lojas
  const filteredLojas = useMemo(() => {
    return lojasData.filter((loja) => {
      const matchesSearch = loja.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           loja.cidade.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDiaSessao = selectedDiaSessao === "Todos" || loja.diaSessao === selectedDiaSessao;
      const matchesLoja = selectedLoja === "Todas" || loja.numero.toString() === selectedLoja.split(" - ")[0];
      const matchesCidade = selectedCidade === "Todas" || loja.cidade === selectedCidade;
      return matchesSearch && matchesDiaSessao && matchesLoja && matchesCidade;
    });
  }, [searchTerm, selectedDiaSessao, selectedLoja, selectedCidade]);

  const diasSessao = ["Todos", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"];

  return (
    <PageBackground>
      <Navigation />
      <section className="pt-24 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <h1 
              className="text-4xl md:text-5xl font-normal uppercase mb-4"
              style={{ 
                fontFamily: "'Baskerville Old Face', serif",
                background: 'linear-gradient(to right, #e3da98, #d3a54c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Lojas
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Filtros */}
            <div className="bg-charcoal p-6 rounded-lg border border-gold/20 mb-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-foreground/80 mb-2 font-medium text-sm">
                    Dia da Sessão
                  </label>
                  <Select value={selectedDiaSessao} onValueChange={setSelectedDiaSessao}>
                    <SelectTrigger className="bg-charcoal-light border-gold/30 text-foreground focus:border-gold">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {diasSessao.map((dia) => (
                        <SelectItem key={dia} value={dia}>
                          {dia}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-foreground/80 mb-2 font-medium text-sm">
                    Loja
                  </label>
                  <Select value={selectedLoja} onValueChange={setSelectedLoja}>
                    <SelectTrigger className="bg-charcoal-light border-gold/30 text-foreground focus:border-gold">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Todas">Todas</SelectItem>
                      {lojasData.map((loja) => (
                        <SelectItem key={loja.id} value={`${loja.numero} - ${loja.nome}`}>
                          {loja.numero} - {loja.nome}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-foreground/80 mb-2 font-medium text-sm">
                    Cidade
                  </label>
                  <Select value={selectedCidade} onValueChange={setSelectedCidade}>
                    <SelectTrigger className="bg-charcoal-light border-gold/30 text-foreground focus:border-gold">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Todas">Todas</SelectItem>
                      {cidades.map((cidade) => (
                        <SelectItem key={cidade} value={cidade}>
                          {cidade}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-foreground/80 mb-2 font-medium text-sm">
                    Buscar
                  </label>
                  <Input
                    type="text"
                    placeholder="Buscar por nome ou cidade..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-charcoal-light border-gold/30 text-foreground focus:border-gold"
                  />
                </div>
              </div>
            </div>

            {/* Lista de Lojas */}
            <div className="bg-charcoal rounded-lg border border-gold/20">
              <div className="p-4 border-b border-gold/20">
                <p className="text-foreground/70 text-sm">
                  {filteredLojas.length} {filteredLojas.length === 1 ? 'loja encontrada' : 'lojas encontradas'}
                </p>
              </div>
              <div className="max-h-[600px] overflow-y-auto custom-scrollbar">
                {filteredLojas.length > 0 ? (
                  <div className="divide-y divide-gold/10">
                    {filteredLojas.map((loja) => (
                      <div
                        key={loja.id}
                        className="p-4 hover:bg-charcoal-light transition-colors cursor-pointer"
                        onClick={() => setSelectedLojaDetalhes(loja)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gold mb-1">
                              {loja.numero} - {loja.nome}
                            </h3>
                            <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4 text-gold" />
                                <span>{loja.cidade}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4 text-gold" />
                                <span>{loja.diaSessao} - {loja.frequencia}</span>
                              </div>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-gold text-gold hover:bg-gold hover:text-charcoal"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedLojaDetalhes(loja);
                            }}
                          >
                            Ver Detalhes
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <p className="text-foreground/70">
                      Nenhuma loja encontrada com os filtros selecionados.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dialog de Detalhes da Loja */}
      <Dialog open={!!selectedLojaDetalhes} onOpenChange={(open) => !open && setSelectedLojaDetalhes(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-charcoal border-gold/30 text-foreground">
          {selectedLojaDetalhes && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-gold">
                  {selectedLojaDetalhes.numero} - {selectedLojaDetalhes.nome}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6 mt-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-charcoal-light p-4 rounded-lg border border-gold/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-5 h-5 text-gold" />
                      <h4 className="font-semibold text-gold">Informações da Loja</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-foreground/70">Rito:</span> REAA - Escocês Antigo e Aceito</p>
                      <p><span className="text-foreground/70">Oriente:</span> {selectedLojaDetalhes.cidade}</p>
                      <p><span className="text-foreground/70">Frequência:</span> {selectedLojaDetalhes.frequencia}</p>
                      <p><span className="text-foreground/70">Dia da Reunião:</span> {selectedLojaDetalhes.diaSessao}</p>
                    </div>
                  </div>
                  <div className="bg-charcoal-light p-4 rounded-lg border border-gold/20">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-gold" />
                      <h4 className="font-semibold text-gold">Localização</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-foreground/70">Cidade:</span> {selectedLojaDetalhes.cidade}</p>
                      <p><span className="text-foreground/70">Estado:</span> Amazonas</p>
                    </div>
                  </div>
                </div>
                <div className="bg-charcoal-light p-4 rounded-lg border border-gold/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-5 h-5 text-gold" />
                    <h4 className="font-semibold text-gold">Contato</h4>
                  </div>
                  <p className="text-sm text-foreground/70">
                    Para mais informações sobre esta loja, entre em contato através do email da GLOMAM ou visite o site oficial.
                  </p>
                </div>
                <div className="bg-gold/10 p-4 rounded-lg border border-gold/30">
                  <p className="text-sm text-foreground/80">
                    <strong>Nota:</strong> Para informações completas sobre a nominata, endereço completo e outras informações detalhadas desta loja, 
                    visite o site oficial da GLOMAM em <a href="https://www.glomam.org.br/lojas" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">glomam.org.br/lojas</a>
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </PageBackground>
  );
};

export default Lojas;
