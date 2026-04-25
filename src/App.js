import React, { useState, useEffect } from 'react';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    servico: '',
    mensagem: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slides do carrossel - Atualizado para Construtora
  const heroSlides = [
    {
      id: 1,
      title: 'Construção Completa',
      subtitle: 'Do projeto à entrega, realizamos sua obra com excelência e qualidade',
      image: 'images/Completa.jpg',
      cta: 'Solicitar Orçamento'
    },
    {
      id: 2,
      title: 'Reformas Residenciais',
      subtitle: 'Transforme seu lar com projetos personalizados e acabamento premium',
      image: 'images/Reformas1.jpg',
      cta: 'Solicitar Orçamento'
    },
    {
      id: 3,
      title: 'Acabamentos Premium',
      subtitle: 'Revestimentos, pisos e porcelanatos com sofisticação e durabilidade',
      image: 'images/Premium.webp',
      cta: 'Solicitar Orçamento'
    },
    {
      id: 4,
      title: 'Projetos Personalizados',
      subtitle: 'Soluções arquitetônicas sob medida para seu estilo de vida',
      image: 'images/Personalizados.webp',
      cta: 'Solicitar Orçamento'
    }
  ];

  // Verificar se está em dispositivo móvel
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Carrossel automático
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Navegação do carrossel
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Fechar menu ao clicar em um link
  const handleNavClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Função para enviar formulário de orçamento
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Criar mensagem para WhatsApp - ORÇAMENTO
    const whatsappMessage = `Olá PN Construções! Gostaria de solicitar um orçamento.%0A%0A` +
      `*Nome:* ${formData.nome}%0A` +
      `*E-mail:* ${formData.email}%0A` +
      `*Telefone:* ${formData.telefone}%0A` +
      `*Cidade:* ${formData.cidade || 'Não informada'}%0A` +
      `*Tipo de Serviço:* ${formData.servico}%0A` +
      `*Detalhes:* ${formData.mensagem || 'Sem detalhes adicionais'}`;
    
    // Número da empresa (substitua pelo número real)
    const whatsappNumber = '5548991012627';
    
    // Abrir WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    
    // Resetar formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      cidade: '',
      servico: '',
      mensagem: ''
    });
    
    // Mostrar mensagem de sucesso
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  // Função para solicitar orçamento de serviço específico
  const solicitarOrcamentoServico = (nomeServico) => {
    const whatsappMessage = `Olá PN Construções! Gostaria de solicitar um orçamento para o serviço de *${nomeServico}*.%0A%0APoderia me passar mais informações sobre valores, disponibilidade e como funciona a contratação?`;
    
    const whatsappNumber = '5548991012627';
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  // Função para abrir WhatsApp com mensagem do HERO
  const openWhatsAppHero = () => {
    const whatsappMessage = `Olá PN Construções! Vi o site de vocês e gostaria de mais informações sobre os serviços de construção e reforma. Podem me ajudar?`;
    
    const whatsappNumber = '5548991012627';
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  // Função para abrir WhatsApp - Serviço Personalizado
  const openWhatsAppPersonalizado = () => {
    const whatsappMessage = `Olá PN Construções! Preciso de um serviço de construção/reforma que não encontrei listado no site. Gostaria de conversar sobre uma solução personalizada. Podem me atender?`;
    
    const whatsappNumber = '5548991012627';
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  // Função para abrir WhatsApp - Botão Flutuante
  const openWhatsAppFlutuante = () => {
    const whatsappMessage = `Olá PN Construções! Gostaria de solicitar um orçamento para serviços de construção e reforma.`;
    
    const whatsappNumber = '5548991012627';
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  // Função para rolar para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    handleNavClick();
  };

  // Lista expandida de serviços - ATUALIZADA (sem Regularização de Imóveis)
  const services = [
    {
      id: 1,
      name: 'Construção do Zero (Obra Completa)',
      description: 'Execução completa de obras residenciais e comerciais, do terreno à entrega das chaves',
      image: 'images/Construção.webp'
    },
    {
      id: 2,
      name: 'Reformas Completas de Casas',
      description: 'Reforma total ou parcial de residências, modernizando ambientes com qualidade',
      image: 'images/Reformas.jpg'
    },
    {
      id: 3,
      name: 'Fundação e Alicerce',
      description: 'Execução de sapatas, estacas, vigas baldrame e radier com engenharia de qualidade',
      image: 'images/Fundação.jpg'
    },
    {
      id: 4,
      name: 'Levantamento de Alvenaria',
      description: 'Construção de paredes, pilares e vigas com blocos cerâmicos ou concreto celular',
      image: 'images/Alvenaria.png'
    },
    {
      id: 5,
      name: 'Elétrica',
      description: 'Instalação elétrica residencial e comercial, com padrões de segurança e qualidade',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80'
    },
    {
      id: 6,
      name: 'Lavagem e Manutenção de Caixa d\'Água',
      description: 'Limpeza profunda, higienização e reparos em caixas d\'água com produtos adequados',
      image: '/images/CaixaAgua.jpg'
    },
    {
      id: 7,
      name: 'Reboco',
      description: 'Chapisco, emboço e reboco para paredes perfeitamente niveladas',
      image: 'images/Reboco.png'
    },
    {
      id: 8,
      name: 'Piso e Porcelanato',
      description: 'Instalação profissional de piso e porcelanato com acabamento impecável',
      image: 'images/Porcelanato.jpg'
    },
    {
      id: 9,
      name: 'Montagem de Móveis',
      description: 'Montagem profissional de móveis planejados e modulados',
      image: 'images/Moveis.jpg'
    },
    {
      id: 10,
      name: 'Instalação de Portas e Janelas',
      description: 'Colocação de esquadrias, portas internas e externas, janelas de alumínio e madeira',
      image: 'images/Portas.jpg'
    },
    {
      id: 11,
      name: 'Fixações em Geral',
      description: 'Instalação de quadros, prateleiras, suportes, TV, cortinas e outros itens na parede',
      image: '/images/TV.jpeg'
    },
    {
      id: 12,
      name: 'Impermeabilização',
      description: 'Proteção contra infiltrações em lajes, reservatórios, paredes e fundações',
      image: 'images/Impermeabilização.jpg'
    },
    {
      id: 13,
      name: 'Projetos Residenciais',
      description: 'Desenvolvimento de projetos arquitetônicos e complementares personalizados',
      image: 'images/Residenciais.jpg'
    },
    {
      id: 14,
      name: 'Ampliações',
      description: 'Expansão de ambientes, acréscimo de cômodos e construção de novos pavimentos',
      image: 'images/Ampliações.jpeg'
    },
    {
      id: 15,
      name: 'Serviços Gerais',
      description: 'Atendemos todas as necessidades da sua obra: casas, prédios, apartamentos e muito mais',
      image: 'images/Serviços.jpg'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'João Silva',
      text: 'Excelente construtora! Fizeram minha casa do zero com muito profissionalismo e respeito ao prazo. Recomendo a todos!',
      rating: 5
    },
    {
      id: 2,
      name: 'Maria Santos',
      text: 'Reformaram toda minha cozinha e banheiro. Equipe muito competente e atenciosa. Ficou perfeito!',
      rating: 5
    },
    {
      id: 3,
      name: 'Carlos Oliveira',
      text: 'Contratei para uma ampliação da casa e o resultado superou minhas expectativas. Peterson é um ótimo Profissinal de primeira linha!',
      rating: 5
    }
  ];

  const whyChooseUs = [
    {
      id: 1,
      title: '25 Anos de Experiência',
      description: 'Uma trajetória sólida no Rio Grande do Sul construindo confiança e qualidade'
    },
    {
      id: 2,
      title: 'Equipe Especializada',
      description: 'Profissionais qualificados e engenheiros dedicados a cada projeto'
    },
    {
      id: 3,
      title: 'Materiais de Primeira',
      description: 'Utilizamos apenas materiais certificados e de alta durabilidade'
    },
    {
      id: 4,
      title: 'Garantia de Qualidade',
      description: 'Todos os nossos serviços possuem garantia e acompanhamento'
    },
    {
      id: 5,
      title: 'Atendimento Personalizado',
      description: 'Soluções sob medida para cada cliente, respeitando sonhos e orçamento'
    },
    {
      id: 6,
      title: 'Inovação e Tecnologia',
      description: 'Utilizamos técnicas modernas e equipamentos de última geração'
    }
  ];

  return (
    <div className="App">
      {/* Botões flutuantes */}
      <div className="floating-whatsapp">
        <button onClick={openWhatsAppFlutuante} aria-label="WhatsApp">
          💬
        </button>
      </div>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo-container">
            <div className="logo">
              <img 
                src='/images/Logo.png' 
                alt='Logo PN Construções'
                className="logo-image"
              />
            </div>
          </div>
          
          {/* Botão do menu hamburger */}
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); handleNavClick(); }}>Início</a>
            <a href="#servicos" onClick={handleNavClick}>Serviços</a>
            <a href="#sobre" onClick={handleNavClick}>Sobre Nós</a>
            <a href="#avaliacoes" onClick={handleNavClick}>Avaliações</a>
            <a href="#contato" onClick={handleNavClick} className="nav-cta">Solicitar Orçamento</a>
          </nav>
        </div>
      </header>

      {/* Hero Section - Carrossel */}
      <section className="hero-carousel">
        <div className="carousel-container">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="carousel-overlay"></div>
              <div className="container">
                <div className="carousel-content">
                  <h1 className="carousel-title">{slide.title}</h1>
                  <p className="carousel-subtitle">{slide.subtitle}</p>
                  <div className="carousel-buttons">
                    <a href="#contato" className="btn btn-primary" onClick={handleNavClick}>
                      {slide.cta}
                    </a>
                    <button className="btn btn-secondary" onClick={openWhatsAppHero}>
                      💬 WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Controles do carrossel */}
          <button className="carousel-control prev" onClick={prevSlide} aria-label="Anterior">
            ❮
          </button>
          <button className="carousel-control next" onClick={nextSlide} aria-label="Próximo">
            ❯
          </button>
          
          {/* Indicadores */}
          <div className="carousel-indicators">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="section servicos">
        <div className="container">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">Soluções completas em construção e reforma para sua residência ou empresa</p>
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.name} />
                  <div className="service-overlay">
                    <button 
                      className="btn-service-quick"
                      onClick={() => solicitarOrcamentoServico(service.name)}
                    >
                      Solicitar Orçamento
                    </button>
                  </div>
                </div>
                <div className="service-info">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Serviço Personalizado */}
          <div className="cta-container">
            <div className="cta-content">
              <h3>Precisa de outro tipo de serviço?</h3>
              <p>Oferecemos soluções personalizadas para qualquer necessidade de construção ou reforma. Entre em contato!</p>
              <button className="btn btn-primary" onClick={openWhatsAppPersonalizado}>
                💬 Falar sobre serviço personalizado
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós - Texto completamente substituído */}
      <section id="sobre" className="section sobre">
        <div className="container">
          <h2 className="section-title">Sobre a PN Construções</h2>
          <div className="sobre-content">
            <div className="sobre-text">
              <p>
                Com <strong>25 anos de história no Rio Grande do Sul</strong>, a <strong>PN Construções</strong> construiu uma trajetória sólida baseada na <strong>confiança, qualidade e compromisso</strong> com seus clientes. Reconhecida por transformar sonhos em realidade, a empresa sempre buscou superar expectativas, surpreendendo em cada projeto e oferecendo um atendimento de excelência.
              </p>
              <p>
                Agora, em <strong>2026</strong>, a <strong>PN Construções</strong> inicia uma nova fase ao expandir suas atividades para <strong>Santa Catarina</strong>, levando sua experiência, dedicação e alto padrão de qualidade para ainda mais pessoas, mantendo seu propósito de <strong>encantar, inovar e fazer a diferença</strong> na vida de cada cliente.
              </p>
              <ul className="features">
                <li>25+ anos de experiência no mercado</li>
                <li>Equipe técnica qualificada e engenheiros especializados</li>
                <li>Atendimento personalizado e consultoria gratuita</li>
                <li>Orçamento detalhado e transparente</li>
                <li>Garantia em todos os serviços</li>
                <li>Técnicas modernas e materiais de primeira linha</li>
                <li>Preços competitivos e justos</li>
                <li>Satisfação do cliente em primeiro lugar</li>
                <li>1000+ Projetos comcluídos</li>
                <li>Certificação e regularidade total</li>
              </ul>
              <div className="sobre-stats">
                <div className="stat-item">
                  <span className="stat-number">25+</span>
                  <span className="stat-label">Anos de Experiência</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Projetos comcluídos</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Clientes Satisfeitos</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">99%</span>
                  <span className="stat-label">Aprovação</span>
                </div>
              </div>
            </div>
            <div className="sobre-image">
              <img src="/images/Sobre.jpeg" alt="Equipe PN Construções" />
              <div className="image-badge">
                <span>🏆</span>
                <p>25 anos transformando sonhos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que nos escolher */}
      <section className="section why-choose-us">
        <div className="container">
          <h2 className="section-title">Por que escolher a PN Construções?</h2>
          <p className="section-subtitle">Motivos que nos tornam a melhor escolha para sua obra</p>
          <div className="why-choose-grid">
            {whyChooseUs.map(item => (
              <div key={item.id} className="why-choose-card">
                <div className="why-choose-icon">
                  <span>✓</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avaliações */}
      <section id="avaliacoes" className="section testimonials">
        <div className="container">
          <h2 className="section-title">O que nossos clientes dizem</h2>
          <p className="section-subtitle">A satisfação dos nossos clientes é nossa maior conquista</p>
          
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-rating">
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="section contato">
        <div className="container">
          <h2 className="section-title">Solicite seu orçamento gratuito</h2>
          <p className="section-subtitle">Preencha o formulário e será direcionado ao WhatsApp - Sem compromisso!</p>
          
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Obrigado pelo seu interesse!</h3>
              <p>Você será redirecionado para o WhatsApp em instantes.</p>
              <p>Caso não tenha sido redirecionado, <a href="https://wa.me/5548991012627" target="_blank" rel="noopener noreferrer">clique aqui</a> para falar conosco.</p>
            </div>
          ) : (
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nome">Nome Completo *</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-mail *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="telefone">Telefone *</label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      placeholder="(48) 99101-2627"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cidade">Cidade *</label>
                    <input
                      type="text"
                      id="cidade"
                      name="cidade"
                      value={formData.cidade}
                      onChange={handleChange}
                      required
                      placeholder="Sua cidade"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="servico">Tipo de Serviço *</label>
                    <select 
                      id="servico" 
                      name="servico" 
                      value={formData.servico}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="Construção do Zero (Obra Completa)">Construção do Zero (Obra Completa)</option>
                      <option value="Reformas Completas de Casas">Reformas Completas de Casas</option>
                      <option value="Fundação e Alicerce">Fundação e Alicerce</option>
                      <option value="Levantamento de Alvenaria">Levantamento de Alvenaria</option>
                      <option value="Elétrica">Elétrica</option>
                      <option value="Lavagem e Manutenção de Caixa d'Água">Lavagem e Manutenção de Caixa d'Água</option>
                      <option value="Reboco">Reboco</option>
                      <option value="Porcelanato">Porcelanato</option>
                      <option value="Montagem de Móveis">Montagem de Móveis</option>
                      <option value="Instalação de Portas e Janelas">Instalação de Portas e Janelas</option>
                      <option value="Fixações em Geral">Fixações em Geral</option>
                      <option value="Impermeabilização">Impermeabilização</option>
                      <option value="Projetos Residenciais">Projetos Residenciais</option>
                      <option value="Ampliações">Ampliações</option>
                      <option value="Serviços Gerais">Serviços Gerais para Obras</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="mensagem">Descrição do Serviço</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Descreva o serviço que você precisa..."
                    rows="5"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-submit">
                  <span>💬</span> Solicitar orçamento via WhatsApp
                </button>
                
                <p className="form-note">
                  Ao enviar, você será direcionado automaticamente para o WhatsApp da PN Construções.
                  <br />
                  <strong>Orçamento 100% gratuito e sem compromisso!</strong>
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3>PN Construções</h3>
              <p>Construindo sonhos com qualidade e confiança há 25 anos.</p>
              <div className="contact-info">
                <p><strong>📱 WhatsApp:</strong> (48) 99101-2627</p>
                <p><strong>📧 E-mail:</strong> petersonpolonio2980@gmail.com</p>
                <p><strong>📍 Endereço:</strong> Camboriú - SC</p>
              </div>
            </div>
            <div className="footer-links">
              <h4>Links Rápidos</h4>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>Início</a>
              <a href="#servicos" onClick={handleNavClick}>Serviços</a>
              <a href="#sobre" onClick={handleNavClick}>Sobre Nós</a>
              <a href="#avaliacoes" onClick={handleNavClick}>Avaliações</a>
              <a href="#contato" onClick={handleNavClick}>Orçamento</a>
            </div>
            <div className="footer-social">
              <h4>Entre em Contato</h4>
              <p>Estamos prontos para realizar seu projeto</p>
              <div className="social-icons">
                <button className="social-btn whatsapp-btn" onClick={openWhatsAppFlutuante}>
                  💬 WhatsApp
                </button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} PN Construções. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;