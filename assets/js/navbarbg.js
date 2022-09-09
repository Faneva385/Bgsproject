class NavB extends React.Component {
    render() {
      return (
          <BrowserRouter>
              <Switch>
                <Route path="/acceuil" component={Acceuil}/>
                <Route path="/nos-services" component={NosServices}/>
                <Route path="/contact" component={Contact}/>
              </Switch>
          </BrowserRouter>
      );
    }
  }